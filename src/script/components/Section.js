export default class Section {
   constructor({ items, renderer }, selector) {
      this._container = document.querySelector(selector);
      this._items = items;
      this._renderer = renderer;
      this.addItem = this.addItem.bind(this);
   }

   addItem(item) {
      const cardEl = this._renderer(item);
      this._container.prepend(cardEl);
   }
   // если addItem получает в агрументе объект с данными, то он должен вызвать renderer чтобы преобразовать данные в DOM элемент, а значит addItem не может быть вызван из renderer
   renderCards() {
      this._items.forEach((item) => {
         const cardEl = this._renderer(item)
         this._container.append(cardEl);
      });
   }
}