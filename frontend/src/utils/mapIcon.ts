import Leaflet from 'leaflet';

import localMarkerImg from '../assets/local-marker.svg';

export const happyMapIcon = Leaflet.icon({
  iconUrl: localMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});
