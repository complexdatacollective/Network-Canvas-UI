#!/usr/bin/env node

var fs = require('fs');

const buildDictionary = (icons) =>
  icons
    .reduce(function(memo, icon) {
      var name = icon.replace('.svg.react.js', '').toLowerCase();
      var file = `./${icon}`;
      return Object.assign(memo, {[name]: file});
    }, {});

const buildModule = (dictionary) => {
  console.log('module.exports = {');
  Object.keys(dictionary).forEach((icon) => {
    console.log(`  '${icon}': require('${dictionary[icon]}'),`);
  });
  console.log('};');
};

fs.readdir('./lib/assets/img/icons', function(err, items) {
  var icons = items.filter(function(item) { return item.match(/\.svg\.react\.js$/); });

  buildModule(buildDictionary(icons));
});
