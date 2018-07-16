import React from 'react';

import { getCurrentWeather } from '../api'

class BasicWeather extends React.Component {
  componentDidMount() {
    getCurrentWeather(35,139)
      .then(console.log)
      .catch(console.error)
  }

  render() {
    return (
      <p>Hello!</p>
    );
  }
}

export default BasicWeather;
