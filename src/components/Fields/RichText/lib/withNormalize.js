/* eslint-disable no-param-reassign,no-restricted-syntax */
import {
  Transforms,
  Node,
  Element,
  Text,
} from 'slate';
// import { EditListPlugin } from '@productboard/slate-edit-list';

// const [, , { Editor }] = EditListPlugin();

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

    console.log('normalize', node);
    // Prevent markdown characters inside text blocks
    if (Text.isText(node)) {
      const container = Node.parent(editor, path);
      const containerPath = path.slice(0, -1);
      const firstTextPath = [...containerPath, 0];

      const { text } = container.children[0];
      const noMarkdownText = text.replace(/^\s*([-#]|[0-9]+\.)\s/g, '');

      if (noMarkdownText !== text) {
        const { selection } = editor;
        Transforms.insertText(editor, noMarkdownText, { at: firstTextPath });
        Transforms.select(editor, selection);
      }
    }

    return normalizeNode([node, path]);
  };

  return editor;
};

export default withNormalize;
