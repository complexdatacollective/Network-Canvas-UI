#!/usr/bin/env node

const fs = require('fs');
const scssOutput = process.argv[2];
const jsOutput = process.argv[3];

const colors = {
  "neon-coral": "#e2215b",
  "neon-coral--dark": "#ce1c54",
  "mustard": "#f2b700",
  "mustard--dark": "#dba500",
  "sea-green": "#00c9a2",
  "sea-green--dark": "#00a081",
  "white": "#fff",
  "slate-blue": "#6b72ec",
  "slate-blue--dark": "#555bbc",
  "navy-taupe": "#2d2955",
  "cyber-grape": "#3a3a75",
  "rich-black": "#16152b",
  "charcoal": "#6d6f76",
  "platinum": "#f2f6f7",
  "platinum--dark": "#dae3e5",
  "white": "#fff",
  "sea-serpent": "#0fb2e2",
  "sea-serpent--dark": "#0fa3ce",
  "purple-pizazz": "#d30fef",
  "purple-pizazz--dark": "#bf0cd8",
  "paradise-pink": "#ff3a8c",
  "paradise-pink--dark": "#e8357c",
  "cerulean-blue": "#0f70ff",
  "cerulean-blue--dark": "#0f66e8",
  "kiwi": "#70bf54",
  "kiwi--dark": "#66ad4c",
  "neon-carrot": "#f7891e",
  "neon-carrot--dark": "#e07c1c",
  "barbie-pink": "#ed008c",
  "barbie-pink--dark": "#d6007f",
  "tomato": "#e82d3f",
  "tomato--dark": "#d32b3a",
};

const palette = {
  "primary": "sea-green",
  "menu": "white",
  "selected": "white",
  "settings": "slate-blue",
  "background": "navy-taupe",
  "text": "white",
  "text-dark": "charcoal",
  "tex-muted": "cyber-grape",
  "link": "neon-coral",
  "light-background": "cyber-grape",
  "dark-background": "rich-black",
  "light-background": "cyber-grape",
  "dark-background": "rich-black",
  "modal-main-panel": "cyber-grape",
  "modal-overlay": "rich-black",
  "info": "sea-green",
  "warning": "mustard",
  "error": "neon-coral",
  "headings": "white",
  "menu-headings": "charcoal",
  "divider": "platinum--dark",
  "node-base": "neon-coral",
  "node-dark": "neon-coral--dark",
  "edge-base": "mustard",
  "edge-dark": "mustard--dark",
  "edge-alt-1": "purple-pizazz",
  "edge-alt-2": "neon-coral",
  "edge-alt-3": "kiwi",
  "edge-alt-4": "paradise-pink",
  "edge-alt-5": "tomato",
  "edge-alt-6": "sea-serpent",
  "edge-alt-7": "barbie-pink",
  "edge-alt-8": "neon-coral",
  "edge-alt-9": "cerulean-blue",
  "ring": "cyber-grape",
  "graph-tooltip": "charcoal",
  "graph-data-1": "sea-green",
  "graph-data-2": "slate-blue",
  "graph-data-3": "neon-carrot",
  "graph-data-4": "sea-serpent",
  "ordinalbin-title": "sea-green",
  "ordinalbin-content": "cyber-grape",
};

if (!scssOutput) {
  console.log('Provide a scss file location.');
  return;
}

if (!jsOutput) {
  console.log('Provide a js file location.');
  return;
}

const buildScssColorDictionary = () =>
  Object.keys(colors).reduce((result, key) =>
    result.concat(`@include color-set('${key}', ${colors[key]});\n`), "/* eslint-disable */\n// AUTO GENERATED\n");

const buildJsColorDictionary = () =>
  Object.keys(colors).reduce((result, key) =>
    result.concat(`  '${key}': '${colors[key]}',\n`), "// AUTO GENERATED\nmodule.exports = {\n");

const buildScssPaletteDictionary = () =>
  Object.keys(palette).reduce((result, key) =>
    result.concat(`@include palette-set('${key}', color('${palette[key]}'));\n`), "");

const buildJsPaletteDictionary = () =>
  Object.keys(palette).reduce((result, key) =>
    result.concat(`  '${key}': '${colors[palette[key]]}',\n`), "").concat("};\n");

function writeFile(file, data) {
  fs.writeFile(file, data, 'utf8', function (error) {
    console.log(`Done writing to ${file}.`);
  });
}

writeFile(scssOutput, `${buildScssColorDictionary()}\n${buildScssPaletteDictionary()}`);
writeFile(jsOutput, `${buildJsColorDictionary()}\n${buildJsPaletteDictionary()}`);
