/* eslint-disable no-param-reassign */
import {
  Range,
  Point,
  Element as SlateElement,
} from 'slate';
import { EditListPlugin } from '@productboard/slate-edit-list';

const SHORTCUTS = {
  '1.': 'ol_list',
  '*': 'ul_list',
  '-': 'ul_list',
  '>': 'block_quote',
  '#': 'heading_one',
  '##': 'heading_two',
  '###': 'heading_three',
  '####': 'heading_four',
};

const withShortcuts = (mode) => (editor) => {
  const {
    deleteBackward,
    insertText,
  } = editor;

  const [, , { Editor, Transforms }] = EditListPlugin();

  editor.insertText = (text) => {
    const { selection } = editor;

    if (text === ' ' && selection && Range.isCollapsed(selection)) {
      const { anchor } = selection;
      const block = Editor.above(editor, {
        match: (n) => Editor.isBlock(editor, n),
      });

      // Attempt to choose the following block?
      // This code is from the Slate examples, and the methods
      // aren't well documented :/
      const path = block ? block[1] : [];
      const start = Editor.start(editor, path);
      const range = { anchor, focus: start };
      const beforeText = Editor.string(editor, range);
      const type = SHORTCUTS[beforeText];

      // If type is set, we matched with one of our shortcuts
      if (type) {
        // Delete the existing character(s)
        Transforms.select(editor, range);
        Transforms.delete(editor);

        // If shortcut is a list, wrap - unless we are in inline mode!
        if ((type === 'ul_list' || type === 'ol_list') && mode !== 'inline') {
          Transforms.wrapInList(editor, type);
          // Return here because we already updated the element type and don't
          // need to do it again below.
          return;
        }

        // Update the element type based on the shortcut type
        const newProperties = {
          type,
        };
        Transforms.setNodes(editor, newProperties, {
          match: (n) => Editor.isBlock(editor, n),
        });

        return;
      }
    }

    insertText(text);
  };

  editor.deleteBackward = (...args) => {
    const { selection } = editor;

    if (selection && Range.isCollapsed(selection)) {
      const match = Editor.above(editor, {
        match: (n) => Editor.isBlock(editor, n),
      });

      if (match) {
        const [block, path] = match;
        const start = Editor.start(editor, path);

        if (
          !Editor.isEditor(block)
          && SlateElement.isElement(block)
          && block.type !== 'paragraph'
          && Point.equals(selection.anchor, start)
        ) {
          const newProperties = {
            type: 'paragraph',
          };
          Transforms.setNodes(editor, newProperties);

          return;
        }
      }

      deleteBackward(...args);
    }
  };

  return editor;
};

export default withShortcuts;
