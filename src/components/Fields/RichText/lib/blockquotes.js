/* eslint-disable import/prefer-default-export */
import {
  Editor,
  Range,
  Transforms,
  Node,
} from 'slate';
import { get } from 'lodash';

const getContainerBlockAtCursor = (editor) => (
  Editor.above(editor, {
    match: (n) => Editor.isBlock(editor, n),
    mode: 'highest',
  })
);

const getContainerBlocksAtSelection = (editor) => {
  const nodes = Editor.nodes(editor);

  const blocks = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const node of nodes) {
    // Top level nodes only
    if (node[1].length === 1) {
      blocks.push(node);
    }
  }

  return blocks;
};

const getBlocks = (editor) => {
  const { selection } = editor;
  const isCollapsed = selection && Range.isCollapsed(selection);

  if (isCollapsed) {
    return [getContainerBlockAtCursor(editor)];
  }

  return getContainerBlocksAtSelection(editor);
};

const toggleBlock = (editor, block) => {
  const type = get(block, [0, 'type']);
  const path = get(block, [1], []);

  switch (type) {
    case 'block_quote':
      // de-blockquote
      Transforms.unwrapNodes(
        editor,
        {
          at: path,
          match: (n) => n.type === 'block_quote',
          mode: 'all',
        },
      );
      break;
    case 'ul_list':
    case 'ol_list':
      // Unwrap all list items
      Transforms.unwrapNodes(
        editor,
        {
          at: path,
          match: (n) => n.type === 'list_item',
          mode: 'all',
        },
      );
      // Set top level element to a block quote
      Transforms.setNodes(editor, { type: 'block_quote' }, { at: path });
      break;
    case 'paragraph':
      Transforms.wrapNodes(
        editor,
        { type: 'block_quote' },
        { at: path },
      );
      break;
    default:
  }
};

// Supports blockquotes containing paragraphs
// and converting list items into block quotes
export const toggleBlockquote = (editor) => {
  const blocks = getBlocks(editor);

  blocks.forEach((block) => {
    toggleBlock(editor, block);
  });

  const reversedPaths = blocks.reduce(
    (acc, [, path]) => ([path, ...acc]),
    [],
  );

  // Merge adjacent block quotes
  reversedPaths.forEach((path, index) => {
    const nextPath = get(reversedPaths, [index + 1]);
    if (!nextPath) { return; }
    const next = Node.get(editor, nextPath);
    const current = Node.get(editor, path);
    if (current.type === 'block_quote' && next.type === 'block_quote') {
      Transforms.mergeNodes(editor, { at: path });
    }
  });
};

export const isBlockquote = (editor) => {
  const block = getContainerBlockAtCursor(editor);
  const type = get(block, [0, 'type']);

  console.log({ block, type, editor });

  return type === 'block_quote';
};
