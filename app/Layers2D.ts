import FeatureLayer from "esri/layers/FeatureLayer";
import { SimpleRenderer } from "esri/renderers";
import { PictureMarkerSymbol } from "esri/symbols";
import { map } from "./StarterMap";

const parkSymbol = new PictureMarkerSymbol({
    url: "http://static.arcgis.com/images/Symbols/OutdoorRecreation/Park.png",
    width: "18px",
    height: "18px"
});

const parkRenderer = new SimpleRenderer({
  symbol: parkSymbol
});

const schoolSymbol = new PictureMarkerSymbol({
    url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
    width: "18px",
    height: "18px"
});

const schoolRenderer = new SimpleRenderer({
  symbol: schoolSymbol
});

const parkLabels = {
  symbol: {
    type: "text",
    color: "#FFFFFF",
    haloColor: "#5E8D74",
    haloSize: "2px",
    font: {
      size: "12px",
      family: 'IBM Plex Sans',
      weight: "normal"
    }
  },
  labelExpressionInfo: {
    expression: "$feature.SAFIELD000"
  }
};

const schoolLabels = {
  symbol: {
    type: "text",
    color: "#FFFFFF",
    haloColor: "#5E748D",
    haloSize: "2px",
    font: {
      size: "12px",
      family: 'IBM Plex Sans',
      weight: "normal"
    }
  },
  labelExpressionInfo: {
    expression: "$feature.SAFIELD000"
  }
};

const schoolSetagaya = new FeatureLayer({
    url: "https://services7.arcgis.com/HEXYbKoojU2pCBN0/arcgis/rest/services/08_school/FeatureServer/0",
    renderer: schoolRenderer,
    labelingInfo: [schoolLabels]
})

const parkSetagaya = new FeatureLayer({
    url: "https://services7.arcgis.com/HEXYbKoojU2pCBN0/arcgis/rest/services/11_parkCultureSports/FeatureServer/0",
    renderer: parkRenderer,
    labelingInfo: [parkLabels]
})

const AddLayers2D = () => {
    map.add(schoolSetagaya);
    map.add(parkSetagaya);
}

export default AddLayers2D;