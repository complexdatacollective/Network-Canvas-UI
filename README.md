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
$ yarn install
```

## Usage

### Components

```jsx
// in LocalComponent.js

import { ExampleComponent } from '../ui/src/components';

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
@import '~network-canvas-ui/lib/styles/all';
```

Importing styles for only certain components may work but is not supported at this time.

### Icons

Adding a new icon requires that we copy it over to the `lib` directory and create a corresponding react icon.

When you add a new svg file to `src/assets/img/icon` run

``npmbin`/svg2react filename.svg` and then run `npm run prepublish`

### Colors

To add a new color or palette, you can add a new css variable to the root selector:
```
:root {
  --my-new-color: blue;
}
```

## What's included

### Components

- LIST TBC

### Styles

- LIST TBC

## Contributing / Development

Docs folder is used to develop any sort of docs or to see the components exist outside of the context of Network Canvas.

/src and /styles folder compile into /lib where they are then exported into the Network Canvas app.

Before committing, run `npm run prepublish` so that all the appropriate files are in the `/lib/` directory.

### Components

- Run `npm run dev` to run a dev server and make chnages to components and styles in `/src/`, then link to them in the relevant `index.js`.
- Run the babel build so that they can be imported

  ```sh
  $ yarn run prepublish
  ````
  or
  ```sh
  $ npm run prepublish
  ````

### Styles

Just add the styles in `/styles/` and link to them in the relevant `main.scss`, and you're done!

## Versioning

This project uses [semantic versioning](http://semver.org/):

```
AA.BB.CC
```

- AA version when you make incompatible API changes,
- BB version when you add functionality in a backwards-compatible manner, and
- CC version when you make backwards-compatible bug fixes.
