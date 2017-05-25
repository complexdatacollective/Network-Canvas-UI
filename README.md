# Network Canvas UI

## Installation

```
# in package.json
{
  "dependencies": {
    "network-canvas-ui": "git+https://git@github.com/codaco/Network-Canvas-UI.git",
    ...
  }
  ...
}
```

`yarn install`

## Usage

### Components

```
# in ExampleComponent.js

import { ExampleComponent } from 'network-canvas-ui';

const LocalComponent = props => (
  <div className="local-component">
    <ExampleComponent /
  </div>
);
```

### Styles

You can also webpack the corresponding styles with:

```
# in ExampleComponent.js

import 'network-canvas-ui/styles/example-component.scss';
```

Or alternatively include all styles in your main stylesheet:

```
# in main.scss

import '~network-canvas-ui/styles/all.scss';
```

## What's included

### Components

- LIST TBC

### Styles

- LIST TBC
