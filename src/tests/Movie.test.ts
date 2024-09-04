// src/tests/Movie.test.ts

import Movie from '../models/Movie';

test('Создание объекта Movie и проверка его свойств', () => {
  const movie = new Movie(
    "Avengers: Endgame",
    2019,
    "USA",
    "Part of the journey is the end.",
    ["Action", "Sci-Fi", "Adventure"],
    8.4,
    181
  );

  expect(movie.title).toBe("Avengers: Endgame");
  expect(movie.year).toBe(2019);
  expect(movie.country).toBe("USA");
  expect(movie.slogan).toBe("Part of the journey is the end.");
  expect(movie.genres).toEqual(["Action", "Sci-Fi", "Adventure"]);
  expect(movie.rating).toBe(8.4);
  expect(movie.duration).toBe(181);
});

test('Проверка метода getInfo класса Movie', () => {
  const movie = new Movie(
    "Avengers: Endgame",
    2019,
    "USA",
    "Part of the journey is the end.",
    ["Action", "Sci-Fi", "Adventure"],
    8.4,
    181
  );

  const expectedInfo =
    "Avengers: Endgame (2019)\n" +
    "Страна: USA\n" +
    "Слоган: \"Part of the journey is the end.\"\n" +
    "Жанры: Action, Sci-Fi, Adventure\n" +
    "Рейтинг: 8.4\n" +
    "Продолжительность: 181 мин.";

  expect(movie.getInfo()).toBe(expectedInfo);
});
