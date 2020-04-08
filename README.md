# react-animated-climacons

> Animated SVG Climacons for React (Weather Icons)

[![NPM](https://img.shields.io/npm/v/react-animated-climacons.svg)](https://www.npmjs.com/package/react-animated-climacons)

Original SVG icons from [https://github.com/noahblon/animated-climacons](https://github.com/noahblon/animated-climacons)

## Install

```bash
npm install --save react-animated-climacons
```

## Usage

```jsx
import React from 'react';

import {
  OpenWeatherMapCodes,
  Moon,
} from 'react-animated-climacons';

const App = () => {
  // Use the OpenWeatherMapCodes to map a code to a component
  const Icon = OpenWeatherMapCodes.night[801];
  return (
    <div>
      // fill and stroke props are optional
      <Moon fill="red" stroke="black" />
      <Icon fill="green" stroke="black" />
    </div>
  );
};
```

## License

MIT © [w3cj](https://github.com/w3cj)
