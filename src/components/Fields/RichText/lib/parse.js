import slate from 'remark-slate';
import unified from 'unified';
import markdown from 'remark-parse';
import { isEmpty } from 'lodash';

export const defaultValue = [{
  type: 'paragraph',
  children: [
    { text: '' },
  ],
}];

// Hack for `>` characters that already exist in some protocols
// and will be interpreted as block quotes on first load
// Encoding this way forces slate to treat them as paragraphs
export const escapeAngleBracket = (value = '') => value.replace(/>/g, '\\>');

// TODO: Can we make this synchronous?
const parse = (value) => {
  // If for some reason we encounter 'content' with no content,
  // Slate rendering will be messed up. Instead, return a
  // 'proper' empty node.
  //
  // The regex tests for presence of only space/tab/break
  if (!value || isEmpty(value) || !/\S/.test(value)) {
    return Promise.resolve(defaultValue);
  }

  return unified()
    .use(markdown)
    .use(slate)
    .process(escapeAngleBracket(value))
    .then(({ result }) => (result));
};

export default parse;
