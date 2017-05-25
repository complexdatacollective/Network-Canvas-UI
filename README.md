# Network Canvas UI

## Installation

`yarn add network-canvas-ui`

## Usage

### Components

```
# ExampleComponent.js

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
# ExampleComponent.js

import 'network-canvas-ui/styles/example-component.scss';
```

Or alternatively include all styles in your main stylesheet:

```
# main.scss

import '~network-canvas-ui/styles/all.scss';
```
