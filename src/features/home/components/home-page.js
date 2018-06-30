import './home.css'
import React from 'react'

import { MAP_ID } from '../../../common/utils/constants'
import LeafletMap from '../../../common/adapters/leaflet-map'

type Props = {}
type State = {
  latitude: number,
  longitude: number,
  accuracy: number,
}

class HomePage extends React.Component<Props, State> {
  state = {
    latitude: 0,
    longitude: 0
  }

  saveCoords = ({coords}) => {
    this.setState({
      latitude: coords.latitude,
      longitude: coords.longitude,
      accuracy: coords.accuracy,
    }, this.initializeMap);
    console.log(coords)
  }

  initializeMap() {
    const { latitude, longitude, accuracy } = this.state;
    this.map = LeafletMap.getMap(MAP_ID ,latitude,longitude, accuracy);
    this.map.withStreets();
  }

  componentDidMount() {
    if (window.navigator) {
      window.navigator.geolocation.getCurrentPosition(this.saveCoords);
    }
  }

  render() {
    const { accuracy } = this.state

    return (
      <div className="home" data-component="home">
        <div className="home__map-wrapper">
          <div id={MAP_ID} className="home__map"></div>
          <div className="home__position-accuracy">{accuracy}</div>
        </div>
      </div>
    );
  }
}

export default HomePage
