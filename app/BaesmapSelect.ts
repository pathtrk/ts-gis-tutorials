import BasemapToggle from "esri/widgets/BasemapToggle";
import BasemapGallery from "esri/widgets/BasemapGallery";
import { view } from "./StarterMap";

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

   