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

// TODO: Can we make this synchronous?
const parse = (value) => {
  // If for some reason we encounter 'content' with no content,
  // Slate rendering will be messed up. Instead, return a
  // 'proper' empty node.
  //
  // The regex tests for presence of only space/tab/break
  if (!value || isEmpty(value) || !/\S/.test(value)) {
    return Promise.resolve({parsedValue: defaultValue, formatUpdated: false});
  }

  // Hack for `>` characters that already exist in some protocols
  // and will be interpreted as block quotes on first load
  //
  // Converts all html elements into their entities.
  const encodedValue = value.replace(/[\u00A0-\u9999<>\&]/g, (i) => '&#'+i.charCodeAt(0)+';');

  return unified()
    .use(markdown)
    .use(slate)
    .process(encodedValue)
    // Notify the consumer if the format has been changed
    .then(({ result }) => ({ parsedValue: result, formatUpdated: encodedValue !== value}));
};

export default parse;
