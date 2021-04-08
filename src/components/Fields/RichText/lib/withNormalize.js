/* eslint-disable no-param-reassign,no-restricted-syntax */
import {
  Transforms,
  Node,
  Element,
  Text,
} from 'slate';

const getTypePattern = (type) => {
  switch (type) {
    case 'quote':
      return '>';
    case 'headings':
      return '#+';
    case 'lists':
      return '\\+|-|\\*|[0-9]+\\.';
    default:
      return null;
  }
};

const getDisallowedPattern = (disallowedTypes) => {
  const typePatterns = disallowedTypes.reduce((acc, type) => {
    const typePattern = getTypePattern(type);
    if (!typePattern) { return acc; }
    return [...acc, typePattern];
  }, []);

  const disallowedPattern = `^\\s*(${typePatterns.join('|')})\\s*`;

  return new RegExp(disallowedPattern, 'g');
};

const SanitizeDisallowedMarkdown = (editor) => ([node, path]) => {
  const disallowedPattern = getDisallowedPattern(editor.disallowedTypes);
  if (editor.inline) {
    if (Text.isText(node)) {
      // Prevent markdown characters inside text blocks
      const container = Node.parent(editor, path);
      const containerPath = path.slice(0, -1);
      const firstTextPath = [...containerPath, 0];

      const { text } = container.children[0];
      const noMarkdownText = text.replace(disallowedPattern, '');

      if (noMarkdownText !== text) {
        const { selection } = editor;
        console.log(selection);
        const range = {
          anchor: { ...selection.anchor, offset: 0 },
          focus: { ...selection.focus, offset: 0 },
        };
        // _replace_ text in block
        Transforms.insertText(editor, noMarkdownText, { at: firstTextPath });
        // Reset to start of line
        Transforms.select(editor, range);
      }
    }
  }
};

/**
 * This extends the editor with a custom normalization
 * function to support 'single' line, and 'marks' only
 * modes.
 */
const withNormalize = (editor) => {
  const { normalizeNode } = editor;

  const sanitizeDisallowedMarkdown = SanitizeDisallowedMarkdown(editor);

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

    sanitizeDisallowedMarkdown([node, path]);

    return normalizeNode([node, path]);
  };

  return editor;
};

export default withNormalize;
