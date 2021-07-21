export default class Section {
   constructor({ items, renderer }, selector) {
      this._container = document.querySelector(selector);
      this._items = items;
      this._renderer = renderer;
      this.addItem = this.addItem.bind(this);
      this.render();
   }

   addItem(item) {
      this._renderer(item, this._container)
   }

   render() {
      this._items.forEach(this.addItem);
   }
}