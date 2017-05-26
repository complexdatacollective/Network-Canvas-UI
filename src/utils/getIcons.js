/* eslint-disable */
const fileList = require.context('../assets/img/icons', true, /[\s\S]*$/);

let dictionary = {};
fileList.keys().forEach(x => {
  x = x.replace('./', '');
  dictionary[x.replace('.svg', '').toLowerCase()] = require(`../assets/img/icons/${x}`).default;
});

export default dictionary;
