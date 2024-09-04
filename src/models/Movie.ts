export default class Movie {
  // Свойства класса
  title: string;
  year: number;
  country: string;
  slogan: string;
  genres: string[];
  rating: number;
  duration: number;

  // Конструктор для инициализации свойств
  constructor(
    title: string,
    year: number,
    country: string,
    slogan: string,
    genres: string[],
    rating: number,
    duration: number
  ) {
    this.title = title;
    this.year = year;
    this.country = country;
    this.slogan = slogan;
    this.genres = genres;
    this.rating = rating;
    this.duration = duration;
  }

  // Метод для отображения информации о фильме
  getInfo(): string {
    return `${this.title} (${this.year})\n` +
      `Страна: ${this.country}\n` +
      `Слоган: "${this.slogan}"\n` +
      `Жанры: ${this.genres.join(', ')}\n` +
      `Рейтинг: ${this.rating}\n` +
      `Продолжительность: ${this.duration} мин.`;
  }
}
