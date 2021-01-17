import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import BasemapToggle from "esri/widgets/BasemapToggle";
import BasemapGallery from "esri/widgets/BasemapGallery";

const map = new EsriMap({
  basemap: "streets-vector"
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [137.9720, 36.2380],
  zoom: 12
});

const basemapToggle = new BasemapToggle({
    view: view,
    nextBasemap: "satellite"
})

const basemapGallery = new BasemapGallery({
    view: view,
    source: {
        portal: {
            url: "https://www.arcgis.com",
            useVectorBasemaps: true // Load vector tile basemaps
        }
    }
})

const BasemapSelect = () => {
    view.ui.add(basemapToggle, "bottom-right");
    view.ui.add(basemapGallery, "top-right");
}

export default BasemapSelect;

   