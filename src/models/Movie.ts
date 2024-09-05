export default class Movie {
  constructor(
    public title: string,
    public year: number,
    public country: string,
    public slogan: string,
    public genres: string[],
    public rating: number,
    public duration: number
  ) {
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
