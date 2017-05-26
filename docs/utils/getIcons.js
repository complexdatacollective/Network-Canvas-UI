/* eslint-disable */
const fileList = require.context('../../public/img/icons', true, /[\s\S]*$/);

let dictionary = {};
fileList.keys().forEach(x => {
  x = x.replace('./', '');
  dictionary[x.replace('.svg', '').toLowerCase()] = require(`../../public/img/icons/${x}`).default;
});

export default dictionary;
