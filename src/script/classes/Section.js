export default class Section {
   constructor({ items, renderer }, selector) {
      this._container = document.querySelector(selector);
      this._items = items;
      this._renderer = renderer;
   }

   addItem(itemEl) {
      this._container.append(itemEL);
   }

   render() {
      this._items.forEach((item) => {
         this._renderer(item);
      });
   }
}