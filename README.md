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

import { ExampleComponent } from 'network-canvas-ui';

const LocalComponent = props => (
  <div className="local-component">
    <ExampleComponent />
  </div>
);
```

### Styles

You can also webpack the corresponding styles with:

```js
// in LocalComponent.js

import 'network-canvas-ui/styles/example-component.scss';
```

Or alternatively include all styles in your main stylesheet and add the mixins you want out of the box:

```scss
// in main.scss

@import '~network-canvas-ui/styles/all.scss';

// optional mixin classes
@include reset;
@include type-classes;
@include button;
@include icon;
@include input;
```

### Icons

Adding a new icon requires that we copy it over to the `lib` directory and create a corresponding react icon.

When you add a new svg file to `src/assets/img/icon` run

``npmbin`/svg2react filename.svg` and then run `npm run prepublish`

## What's included

### Components

- LIST TBC

### Styles

- LIST TBC

## Contributing / Development

Docs folder is used to develop any sort of docs or to see the components exist outside of the context of Network Canvas.

/src and /styles folder compile into /lib where they are then exported into the Network Canvas app.

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
