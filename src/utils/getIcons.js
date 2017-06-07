/* eslint-disable */
const fileList = require.context('../assets/img/icons', true, /(\.svg\.react\.js)$/);

let dictionary = {};
fileList.keys().forEach(x => {

  x = x.replace('./', '');
  dictionary[x.replace('.svg.react.js', '').toLowerCase()] = require(`../assets/img/icons/${x}`).default;
  console.log(dictionary);
});

export default dictionary;
