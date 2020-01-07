# Network Canvas UI

## Installation

```json
// in package.json
{
  "dependencies": {
    "network-canvas-ui": "git+https://git@github.com/codaco/Network-Canvas-UI.git"
  }
}
```

```sh
yarn install
```

## Usage

### Components

```jsx
// in LocalComponent.js

import { ExampleComponent } from '@codaco/ui';

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
