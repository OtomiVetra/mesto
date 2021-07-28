export default class Section {
   constructor({ items, renderer }, selector) {
      this._container = document.querySelector(selector);
      this._items = items;
      this._renderer = renderer;
      this.addItem = this.addItem.bind(this);
   }
   renderCards() {
      this._items.forEach(item => this._renderer(item))
   }

   addItem(element) {
      this._container.prepend(element);
   }



}