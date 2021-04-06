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

// Supports blockquotes containing paragraphs
// and converting list items into block quotes
const toggleBlockquote = (editor) => () => {
  const { selection } = editor;

  const block = Editor.above(editor, {
    match: (n) => Editor.isBlock(editor, n),
    mode: 'highest',
  });

  const type = get(block, [0, 'type']);
  const path = get(block, [1], []);

  const nodes = Editor.nodes(
    editor,
    {
      at: [selection.focus, selection.anchor],
      // mode: 'highest',
      match: (n) => {
        // Range.includes(selection, n[1]),
        console.log({ n });
        return true;
      },
    },
  );

  for (let node of nodes) {
    console.log({ node, selection });
  }

  // de-blockquote
  switch (type) {
    case 'block_quote':
      Transforms.liftNodes(editor);
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

const onKeyDown = (editor) => (event) => {
  const args = [event, editor];

  switch (event.key) {
    case KEY_ENTER:
      onEnter(...args);
      break;
    case KEY_BACKSPACE:
      onBackspace(...args);
      break;
    default:
      break;
  }
};

const blockquotes = (editor) => ({
  onKeyDown: onKeyDown(editor),
  toggleBlockquote: toggleBlockquote(editor),
});

export default blockquotes;
