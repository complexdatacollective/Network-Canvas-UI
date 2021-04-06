const KEY_ENTER = 'Enter';
const KEY_BACKSPACE = 'Backspace';

const onEnter = () => {
  // if in a blockquote insert a new line?
};

const onBackspace = () => {
  // If in a blockquote close the blockquote
};

const toggleBlockQuote = () => {
  // Toggle blockquote AND paragraph
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
  toggleBlockQuote,
});

export default blockquotes;
