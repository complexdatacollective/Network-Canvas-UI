# Network Canvas UI

## Installation

Install with npm or link to git in package.json:

```sh
npm install --save @codaco/ui
```

```js
// in package.json
{
  "dependencies": {
    "@codaco/ui": "git+https://git@github.com/codaco/Network-Canvas-UI.git"
  }
}
```

## Development

In this repo:

`npm link` then in consuming app ``

After each change:

`npm install; npm run build; npm install --only=production`

To revert in consuming app: `npm install`

### Components

```jsx
// in LocalComponent.js

import { ExampleComponent } from '@codaco/ui';

// To directly link to a component use:
// `import ComponentName from '@codaco/ui/lib/components/ComponentName'`;

const LocalComponent = props => (
  <div className="local-component">
    <ExampleComponent />
  </div>
);
```

### Styles

You can include all styles in your main stylesheet:

```scss
// in main.scss
@import '~@codaco/ui/lib/styles/all';
```

Importing styles for only certain components may work but is not supported at this time.

### Icons

### Colors

To add a new color or palette, you can add a new css variable to the root selector:

``` SASS
:root {
  --my-new-color: blue;
}
```

## What's included

### Component List

- List of components goes here.

## Versioning

This project uses [semantic versioning](http://semver.org/):

`
AA.BB.CC
`

- AA version when you make incompatible API changes,
- BB version when you add functionality in a backwards-compatible manner, and
- CC version when you make backwards-compatible bug fixes.
