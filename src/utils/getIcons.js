/* eslint-disable */
const fileList = require.context('../assets/img/icons', true, /(\.svg\.react\.js)$/);

let dictionary = {};
fileList.keys().forEach(x => {

  x = x.replace('./', '');
  dictionary[x.replace('.svg.react.js', '').toLowerCase()] = typeof require(`../assets/img/icons/${x}`) === 'object' ? require(`../assets/img/icons/${x}`).default : require(`../assets/img/icons/${x}`);
});

export default dictionary;
