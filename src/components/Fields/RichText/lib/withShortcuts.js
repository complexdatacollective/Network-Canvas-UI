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
  '#####': 'heading_five', // Always disallowed
  '######': 'heading_six', // Always disallowed
};

// Maps disallowed types to shortcut types
const TYPE_MAP = {
  lists: ['ol_list', 'ul_list'],
  headings: ['heading_one', 'heading_two', 'heading_three', 'heading_four', 'heading_five', 'heading_six'],
  quote: ['block_quote'],
};

const [, , { Transforms, Editor }] = EditListPlugin();

const getBeforeText = (editor) => {
  const { selection } = editor;
  // check for incomplete shortcut on the last line.
  const { anchor } = selection;
  const block = Editor.above(editor, {
    match: (n) => Editor.isBlock(editor, n),
  });

  // Get the text from the cursor position to the beginning
  // of the current block (not including the last space).
  const path = block ? block[1] : [];
  const start = Editor.start(editor, path);
  const range = { anchor, focus: start };
  // Text up until the last space
  const beforeText = Editor.string(editor, range);

  return [beforeText, range];
};

const withShortcuts = (editor) => {
  const {
    deleteBackward,
    insertText,
    inline,
    disallowedTypes,
    insertBreak,
  } = editor;

  // Disallow H5 and H6
  const isDisallowedHeading = (type) => type === 'heading_five' || type === 'heading_six';

  // Lookup each disallowed type in TYPE_MAP, and return true if the
  // given type is included
  const isDisallowedType = (
    type, typeList,
  ) => isDisallowedHeading(type)
  || typeList.some((disallowedType) => TYPE_MAP[disallowedType].includes(type));

  editor.insertBreak = () => {
    // If the last line was a shortcut (e.g. the user
    // didn't press space, delete it.
    const [beforeText, range] = getBeforeText(editor);
    const type = SHORTCUTS[beforeText.trim()];

    if (type) {
      Transforms.select(editor, range);
      Transforms.delete(editor);
      // Uncomment the following to stay on the same line.
      // return;
    }

    insertBreak();
  };

  editor.insertText = (text) => {
    const { selection } = editor;

    // When the user inserts a space and we have a single cursor rather
    // than a range selected.
    if (text === ' ' && selection && Range.isCollapsed(selection)) {
      const [beforeText, range] = getBeforeText(editor);
      // Trim any leading spaces from the text and check whether
      // it matches one of the shortcuts.
      const type = SHORTCUTS[beforeText.trim()];

      // If type is set, we matched with one of our shortcuts
      if (type) {
        // Delete the existing character(s)
        // Unless we replace them with setNodes or wrapInList,
        // this ensures they will not end up in markdown.
        Transforms.select(editor, range);
        Transforms.delete(editor);

        // Cancel shortcut creation if tag is disallowed
        if (isDisallowedType(type, disallowedTypes)) {
          return;
        }

        // If shortcut is a list, wrap - unless we are in inline mode!
        if ((type === 'ul_list' || type === 'ol_list') && !inline) {
          // If we're not already in a list, wrap the text in a list
          if (!Editor.getCurrentList(editor, range)) {
            Transforms.wrapInList(editor, type);
          }

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
