
export type Genre = {
  id: number,
  name: string
}

export type Cast = {
  id: number,
  name: string,
  profile_path: string,
}

export class Movie {
  constructor(
    public id: number,
    public title: string,
    public release_date: string,
    public poster_path: string,
    public backdrop_path: string,
    public overview: string,
    public director: string,
    public genres: Genre[],
    public cast: Cast[],
    public vote_average: number
  ) {}
}

export const getImg = (partUrl: string) =>
  !partUrl ? "" : "https://image.tmdb.org/t/p/w500" + partUrl;

