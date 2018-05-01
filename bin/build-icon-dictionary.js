#!/usr/bin/env node

const fs = require('fs');
const changeCase = require('change-case');

const buildDictionary = icons =>
  icons
    .reduce((memo, icon) => {
      const name = icon.replace('.svg.react.js', '').toLowerCase();
      const file = `./${icon}`;
      return Object.assign(memo, { [name]: file });
    }, {});

const buildModule = (dictionary) => {
  Object.keys(dictionary).forEach((icon) => {
    console.log(`import ${changeCase.camel(icon)} from '${dictionary[icon]}';`);
  });

  console.log('export default {');
  Object.keys(dictionary).forEach((icon) => {
    console.log(`  '${icon}': ${changeCase.camel(icon)},`);
  });
  console.log('};');
};

fs.readdir('./lib/assets/img/icons', (err, items) => {
  const icons = items.filter(item => item.match(/\.svg\.react\.js$/));
  buildModule(buildDictionary(icons));
});
