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
  // The regex tests for presence of space/tab/break
  if (!value || isEmpty(value) || !/\S/.test(value)) {
    return Promise.resolve(defaultValue);
  }

  return unified()
    .use(markdown)
    .use(slate)
    .process(value)
    .then(({ result }) => result);
};

export default parse;
