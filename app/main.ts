import BasemapSelect from "./BaesmapSelect";
import AddLayers2D from "./Layers2D";
import PointGraphic from "./PointGraphic";

const listEl = document.querySelector('#list ul');

const setTutorial = (title: string, displayFn: () => void) => {
  const li = document.createElement('li')
  li.textContent = title;
  li.onclick = displayFn;
  listEl?.appendChild(li);
};

setTutorial('Select a Basemap', BasemapSelect);
setTutorial('Add Layers to the 2D map', AddLayers2D);
setTutorial('Add a point, line, and polygon', PointGraphic);