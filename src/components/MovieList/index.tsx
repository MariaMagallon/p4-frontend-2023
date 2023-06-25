import { useEffect, useState } from "react";
import { Movie } from "../../utils/movieUtils";
import MovieCard from "../MovieCard";

type MovieListProps = {
  page: number;
}
function MovieList(props: MovieListProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const {page} = props;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.results);
      })
      .catch((error) => {
        console.error("ERROR ON FETCHING DATA", error);
      });
  }, [page]);

  return (
    <section className="grid">
      {movies.map((movie) => (
        <div key={movie.id}>
          <MovieCard movie={movie} ></MovieCard>
        </div>
      ))}
    </section>
  );
}

export default MovieList;
