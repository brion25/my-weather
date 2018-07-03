import { MAP_LAYER_CONFIG } from '../utils/constants'

let leafletMap = null

type MapArgs = {
  domId: string,
  lat: number,
  lon: number,
  acc: number,
  zoom: number,
};

class LeafletMap {
  static getMap(...mapArgs: MapArgs) {
    if (leafletMap) {
      return leafletMap;
    }

    leafletMap = new LeafletMap(mapArgs);
    return leafletMap;
  }

  constructor([domId: string, lat: number, lon: number, acc: number, zoom: number = 15]) {
    if (!window.L) {
      throw new Error('Leaflet needs to be initialized!');
    }

    this.map = window.L.map(domId).setView([lat, lon], zoom);
    window.L.marker([lat, lon]).addTo(this.map)
      .bindPopup(`More or Less ${acc} meters`)
      .openPopup();

    this.withStreets = this.withStreets.bind(this)
  }

  showLayers() {
    if (!this.showingLayers) {
      this.showingLayers = true;
      window.L.control.layers({}, {
        precipitation: window.L.OWM.precipitationClassic(MAP_LAYER_CONFIG),
        rain: window.L.OWM.rainClassic(MAP_LAYER_CONFIG),
        temperature: window.L.OWM.temperature(MAP_LAYER_CONFIG),
      }, {collapsed: false}).addTo(this.map)
    }
  }

  withStreets() {
    window.L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: process.env.REACT_APP_MAPBOX_TOKEN
    }).addTo(this.map);
  }
}

export default LeafletMap
