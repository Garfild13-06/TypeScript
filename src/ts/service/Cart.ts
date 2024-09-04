import Buyable from '../domain/Buyable';

interface CartItem extends Buyable {
  quantity: number; // Поле для хранения количества товаров
}

export default class Cart {
  private _items: CartItem[] = [];

  // Добавление элемента в корзину
  add(item: Buyable): void {
    const existingItem = this._items.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      // Если товар физический, увеличиваем количество
      if (item.isPhysical) {
        existingItem.quantity += 1;
      }
    } else {
      // Если товара еще нет в корзине, добавляем его
      this._items.push({...item, quantity: 1});
    }
  }

  // Уменьшение количества товара
  decreaseQuantity(id: number): void {
    const existingItem = this._items.find(cartItem => cartItem.id === id);

    if (existingItem && existingItem.isPhysical) {
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        this.removeById(id);  // Если количество становится 0, удаляем товар
      }
    }
  }

  // Удаление товара из корзины по id
  removeById(id: number): void {
    this._items = this._items.filter(item => item.id !== id);
  }

  // Получение копии списка товаров
  get items(): CartItem[] {
    return [...this._items];
  }

  // Подсчет полной стоимости с учетом количества товаров
  totalPrice(): number {
    return this._items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  totalPriceWithDiscount(discount: number): number {
    const total = this.totalPrice();
    return total - (total * discount / 100);
  }

}


