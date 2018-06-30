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
    console.log(mapArgs)
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
