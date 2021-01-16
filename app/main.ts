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
  center: [-118.244, 34.052],
  zoom: 12
});

const basemapToggle = new BasemapToggle({
    view: view,
    nextBasemap: "satellite"
})

view.ui.add(basemapToggle, "bottom-right");

const basemapGallery = new BasemapGallery({
    view: view,
    source: {
        portal: {
            url: "https://www.arcgis.com",
            useVectorBasemaps: true // Load vector tile basemaps
        }
    }
})

view.ui.add(basemapGallery, "top-right");