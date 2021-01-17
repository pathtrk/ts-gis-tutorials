import BasemapSelect from "./BaesmapSelect";

const listEl = document.querySelector('#list ul');

class Tutorial {
  private listEl = listEl;
  constructor(readonly title: string, readonly displayFn: ()=> void) {}

  show() {
    const li = document.createElement('li')
    li.textContent = this.title;
    li.onclick = this.displayFn;
    this.listEl?.appendChild(li);
  }
}

const basemapSelect = new Tutorial('Select a Basemap', BasemapSelect);
basemapSelect.show();