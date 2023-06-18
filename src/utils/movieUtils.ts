export class Genre {
  constructor(public id: number, public name: string) {}
}

export class Movie {
  constructor(
    public id: number,
    public title: string,
    public release_date: string,
    public poster_path: string,
    public backdrop_path: string,
    public overview: string,
    public genres: Array<Genre>,
    public vote_average: number
  ) {}
}

export const getImg = (partUrl: string) =>
  !partUrl ? "" : "https://image.tmdb.org/t/p/w500" + partUrl;

export async function getDirector(id: string) : Promise<string> {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}`
  );
  const { crew }: any = await response.json();
  const director = crew.find((result: any) => result.job === "Director");
  return director ? director.name : "Director not found";
}

