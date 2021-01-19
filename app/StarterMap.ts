import Map from "esri/Map";
import MapView from "esri/views/MapView";

export const map = new Map({
  basemap: "topo-vector"
});

export const view = new MapView({
  map: map,
  container: "viewDiv",
  // center: [137.9720, 36.2380],
  center: [139.5945, 35.6575],
  zoom: 15
});

