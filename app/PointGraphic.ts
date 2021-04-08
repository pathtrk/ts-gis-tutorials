import Graphic from "esri/Graphic";
import GraphicsLayer from "esri/layers/GraphicsLayer";
import Point from "esri/geometry/Point";
import Polyline from "esri/geometry/Polyline";
import Polygon from "esri/geometry/Polygon";
import { map } from "./StarterMap";

const graphicsLayer = new GraphicsLayer();

const point = Point.fromJSON({ //Create a point
    type: "point",
    longitude: 139.59483,
    latitude: 35.65785
});

const simpleMarkerSymbol = {
    type: "simple-marker",
    color: [226, 119, 40],  // Orange
    outline: {
        color: [255, 255, 255], // White
        width: 1
    }
};

const pointGraphic = new Graphic({
    geometry: point,
    symbol: simpleMarkerSymbol
});

graphicsLayer.add(pointGraphic);

const PointGraphic = () => map.add(graphicsLayer);

// Create a line geometry
const polyline = Polyline.fromJSON({
    type: "polyline",
    paths: [
        [139.59480, 35.65773],
        [139.59483, 35.65765],
        [139.59536, 35.65747],
        [139.59620, 35.65716],
        [139.59650, 35.6571],
    ]
});

const simpleLineSymbol = {
    type: "simple-line",
    color: [226, 119, 40], // Orange
    width: 2
};

const polylineGraphic = new Graphic({
    geometry: polyline,
    symbol: simpleLineSymbol
});

graphicsLayer.add(polylineGraphic);

// Create a polygon geometry
const polygon = Polygon.fromJSON({
    type: "polygon",
    rings: [
        [139.59415, 35.65785],
        [139.59403, 35.65703],
        [139.59276, 35.65690],
        [139.59272, 35.65693],
        [139.59250, 35.65760],
        [139.59239, 35.65827],
        [139.59329, 35.65812],
    ]
});

const simpleFillSymbol = {
    type: "simple-fill",
    color: [227, 139, 79, 0.8],  // Orange, opacity 80%
    outline: {
        color: [255, 255, 255],
        width: 1
    }
};

const polygonGraphic = new Graphic({
    geometry: polygon,
    symbol: simpleFillSymbol,

});

graphicsLayer.add(polygonGraphic);

export default PointGraphic;