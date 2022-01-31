![Elements UI](/.storybook/elements.png)

### [Elements UI](https://elementsui.netlify.app/) is a simple, modular and lightweight component library that gives you the building blocks to build React applications.

Elements UI components use emotion as their style engine.

### Installation

To install Elements UI in a React project, run either of the following command depending on the package manager used in the project:

```sh
npm i @rishavbharti/elements-ui
```

```sh
yarn add @rishavbharti/elements-ui
```

### Usage

Here's a quick example to get you started, it's literally all you need:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@rishavbharti/elements-ui';

function App() {
  return <Button label='Hello People' />;
}
```

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { TextField } from '@rishavbharti/elements-ui';

function App() {
  return (
    <TextField helperText='Please enter your name' label='Name' required />
  );
}
```

##### To discover more components, [click here](https://stories--61f3e693fdae5e003abb3728.chromatic.com/)
