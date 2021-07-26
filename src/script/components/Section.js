export default class Section {
   constructor({ data, renderer }, selector) {
      this._renderItems = data;
      this._renderer = renderer;
      this._container = document.querySelector(selector);
   }

   // addItem(item) {
   //    const cardEl = this._renderer(item);
   //    this._container.prepend(cardEl);
   // }
   // если addItem получает в агрументе объект с данными, то он должен вызвать renderer чтобы преобразовать данные в DOM элемент, а значит addItem не может быть вызван из renderer
   // renderCards() {
   //    this._items.forEach((item) => {
   //       const cardEl = this._renderer(item)
   //       this._container.append(cardEl);
   //    });
   // }

   renderItems() {
      this._renderedItems.forEach(item => this._renderer(item))
   }

   setItem(element) {
      this._container.append(element);
   }



}