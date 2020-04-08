import React from 'react'

import {
  OpenWeatherMapCodes,
  Moon,
} from 'react-animated-climacons';

const App = () => {
  const Icon = OpenWeatherMapCodes.night[801];
  return (
    <div>
      <Moon fill="red" />
      <Icon fill="green" />
    </div>
  )
}

export default App
