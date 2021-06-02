/* eslint-disable no-param-reassign,no-restricted-syntax */
import {
  Transforms,
  Node,
  Element,
  Editor,
} from 'slate';
import {
  isEmpty,
} from 'lodash';

const getBlockPattern = (type) => {
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

const getInlinePattern = (type) => {
  switch (type) {
    case 'code':
      return '`';
    case 'strike':
      return '~';
    default:
      return null;
  }
};

const getDisallowedSanitizer = (disallowedTypes) => {
  const blockTypePatterns = disallowedTypes.reduce((acc, type) => {
    const typePattern = getBlockPattern(type);
    if (!typePattern) { return acc; }
    return [...acc, typePattern];
  }, []);

  const disallowedBlockPattern = new RegExp(`^(\\s*)(${blockTypePatterns.join('|')})(\\s*)`, 'g');

  const inlineTypePatterns = disallowedTypes.reduce((acc, type) => {
    const typePattern = getInlinePattern(type);
    if (!typePattern) { return acc; }
    return [...acc, typePattern];
  }, []);

  const disallowedInlinePattern = new RegExp(`(${inlineTypePatterns.join('|')})`, 'g');

  return (text) => text
    .replace(disallowedBlockPattern, '$1$3')
    .replace(disallowedInlinePattern, '');
};

const SanitizeDisallowedMarkdown = (editor) => {
  const sanitizeDisallowed = getDisallowedSanitizer(editor.disallowedTypes);

  return ([node, path]) => {
    if (editor.disallowedTypes.length === 0) { return; }
    // Prevent markdown characters inside (first) text blocks
    if (
      Element.isElement(node)
      && Editor.hasTexts(editor, node)
    ) {
      // Find first non-empty text node
      const firstTextNodeIndex = node.children.findIndex(({ text }) => !isEmpty(text));
      if (firstTextNodeIndex === -1) { return; }
      const firstTextNodePath = [...path, firstTextNodeIndex];
      const { text } = Node.get(editor, firstTextNodePath);
      const noMarkdownText = sanitizeDisallowed(text);

      if (noMarkdownText !== text) {
        const { selection } = editor;
        const offset = Math.max(0, selection.anchor.offset - 1);
        const range = {
          anchor: { ...selection.anchor, offset },
          focus: { ...selection.focus, offset },
        };
        // replace text in node
        Transforms.insertText(editor, noMarkdownText, { at: firstTextNodePath });
        // Reset to start of line
        Transforms.select(editor, range);
      }
    }
  };
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
