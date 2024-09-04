import './css/style.css';

// eslint-disable-next-line
import './ts/app';

import Movie from './models/Movie';

// Создание экземпляра класса Movie
const avengers = new Movie(
    "Avengers: Endgame",
    2019,
    "USA",
    "Part of the journey is the end.",
    ["Action", "Sci-Fi", "Adventure"],
    8.4,
    181
);

// Отображение информации о фильме
console.log(avengers.getInfo());

// Пример добавления в корзину
const cart = [];
cart.push(avengers);
console.log("В корзине:", cart.length, "предметов.");
