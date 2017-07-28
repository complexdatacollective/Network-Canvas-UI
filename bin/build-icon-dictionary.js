#!/usr/bin/env node

var fs = require('fs');
var changeCase = require('change-case');

const buildDictionary = (icons) =>
  icons
    .reduce(function(memo, icon) {
      var name = icon.replace('.svg.react.js', '').toLowerCase();
      var file = `./${icon}`;
      return Object.assign(memo, {[name]: file});
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

fs.readdir('./lib/assets/img/icons', function(err, items) {
  var icons = items.filter(function(item) { return item.match(/\.svg\.react\.js$/); });

  buildModule(buildDictionary(icons));
});
