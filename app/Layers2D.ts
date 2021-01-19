import FeatureLayer from "esri/layers/FeatureLayer";
import { map } from "./StarterMap";

const librariesSetagaya = new FeatureLayer({
    url: "https://services7.arcgis.com/HEXYbKoojU2pCBN0/arcgis/rest/services/08_school/FeatureServer/0"
})

const parksSetagaya = new FeatureLayer({
    url: "https://services7.arcgis.com/HEXYbKoojU2pCBN0/arcgis/rest/services/11_parkCultureSports/FeatureServer/0"
})

const AddLayers2D = () => {
    map.add(librariesSetagaya);
    map.add(parksSetagaya);
}

export default AddLayers2D;