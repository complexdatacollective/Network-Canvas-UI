// import { Editor } from 'slate-react';
import {
  Editor,
  Range,
  Transforms,
  Node,
} from 'slate';
import { get } from 'lodash';

const KEY_ENTER = 'Enter';
const KEY_BACKSPACE = 'Backspace';

const onEnter = () => {
  // if in a blockquote insert a new line?
};

const onBackspace = () => {
  // If in a blockquote close the blockquote
};

const getBlocks = (editor) => {
  const { selection } = editor;
  const isCollapsed = selection && Range.isCollapsed(selection);
  if (isCollapsed) {
    return [Editor.above(editor, {
      match: (n) => Editor.isBlock(editor, n),
      mode: 'highest',
    })];
  }

  const start = Editor.start(editor, selection, { unit: 'block' });
  const end = Editor.end(editor, selection, { unit: 'block' });

  const nodes = Node.elements(
    editor,
    {
      from: start.path,
      to: end.path,
    },
  );

  const blocks = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const node of nodes) {
    if (node[1].length === 1) {
      blocks.push(node);
    }
  }

  return blocks;
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

// const onKeyDown = (editor) => (event) => {
//   const args = [event, editor];

//   switch (event.key) {
//     case KEY_ENTER:
//       onEnter(...args);
//       break;
//     case KEY_BACKSPACE:
//       onBackspace(...args);
//       break;
//     default:
//       break;
//   }
// };

const withBlockquotes = (editor) => {
  const {
    selection,
    deleteBackward,
    deleteFragment,
  } = editor;

  editor.deleteBackward = (unit) => {
    console.log(unit, 'del back');
    const block = Editor.above(editor, {
      match: (n) => Editor.isBlock(editor, n),
      mode: 'highest',
    });

    console.log(block);
    deleteBackward(unit);
  };

  editor.deleteFragment = (...args) => {
    console.log(...args, 'del frag');
    deleteFragment(...args);
  };

  return editor;
};

export default withBlockquotes;
