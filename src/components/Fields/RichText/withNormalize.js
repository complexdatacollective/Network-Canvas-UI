/* eslint-disable no-param-reassign,no-restricted-syntax */
import { Transforms, Node, Element } from 'slate';
import { EditListPlugin } from '@productboard/slate-edit-list';

const [, , { Editor }] = EditListPlugin();

/**
 * This extends the editor with a custom normalization
 * function to support 'single' line, and 'marks' only
 * modes.
 */
const withNormalize = (editor) => {
  const { normalizeNode } = editor;

  editor.normalizeNode = ([node, path]) => {
    /**
     * 'inline' mode
     *
     * We can the top-level nodes, for each
     * subsequent element after the first we
     * merge it with the previous, creating
     * an inline node.
     */

    // for top level paths only
    if (editor.inline && path.length === 0) {
      // If empty, insert a blank paragraph node
      if (editor.children.length < 1) {
        const defaultNode = { type: 'paragraph', children: [{ text: '' }] };
        Transforms.insertNodes(editor, defaultNode, { at: path.concat(0) });
      }

      // Force the first node to always be a paragraph and merge any
      // later nodes
      for (const [child, childPath] of Node.children(editor, path)) {
        if (Element.isElement(child) && childPath[0] === 0 && node.type !== 'paragraph') {
          Transforms.setNodes(
            editor,
            { type: 'paragraph', break: false },
            { at: childPath },
          );
        } else if (Element.isElement(child)) {
          Transforms.mergeNodes(editor, { at: childPath });
        }
      }
    }

    // Prevent markdown characters inside list items
    if (Element.isElement(Node.get(editor, path))) {
      const item = Editor.getCurrentItem(editor, path);

      if (item) {
        for (const [child, childPath] of Node.children(editor, path)) {
          if (child.text) {
            const noMarkdownText = child.text.replace(/^\s*[-#]/g, '');
            if (noMarkdownText !== child.text) {
              const range = Editor.range(
                editor,
                Editor.start(editor, childPath),
                Editor.end(editor, childPath),
              );
              Transforms.select(editor, range);
              Transforms.delete(editor);
              Transforms.insertText(editor, noMarkdownText, Editor.start(editor, childPath));
            }
          }
        }
      }
    }

    return normalizeNode([node, path]);
  };

  return editor;
};

export default withNormalize;
