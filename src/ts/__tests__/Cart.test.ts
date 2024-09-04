import Cart from '../service/Cart';
import Buyable from '../domain/Buyable';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

const item1: Buyable = {id: 1, name: 'Item 1', price: 100};
const item2: Buyable = {id: 2, name: 'Item 2', price: 200};

test('Суммарная стоимость без скидки', () => {
  const cart = new Cart();
  cart.add(item1);
  cart.add(item2);

  expect(cart.totalPrice()).toBe(300); // 100 + 200 = 300
});

test('Суммарная стоимость с учетом скидки', () => {
  const cart = new Cart();
  cart.add(item1);
  cart.add(item2);

  expect(cart.totalPriceWithDiscount(10)).toBe(270); // 300 - 10% = 270
});

test('Удаление объекта по id', () => {
  const cart = new Cart();
  cart.add(item1);
  cart.add(item2);

  cart.removeById(1);

  expect(cart.items.length).toBe(1);
  expect(cart.items[0].id).toBe(2);
});

test('Добавление уже существующего физического товара', () => {
  const cart = new Cart();
  const phone: Buyable = {id: 2, name: 'Smartphone', price: 500, isPhysical: true};

  cart.add(phone);
  cart.add(phone); // Добавляем второй раз

  // Проверяем, что количество увеличено
  expect(cart.items[0].quantity).toBe(2);
});

test('Уменьшение количества физического товара до удаления', () => {
  const cart = new Cart();
  const phone: Buyable = {id: 2, name: 'Smartphone', price: 500, isPhysical: true};

  cart.add(phone);
  cart.add(phone); // Добавляем второй раз

  // Уменьшаем количество до 1
  cart.decreaseQuantity(2);
  expect(cart.items[0].quantity).toBe(1);

  // Уменьшаем до 0, товар должен быть удален
  cart.decreaseQuantity(2);
  expect(cart.items.length).toBe(0);
});
