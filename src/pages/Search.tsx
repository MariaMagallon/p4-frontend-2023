import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Movie } from "../utils/movieUtils";
import MovieCard from "../components/MovieCard";

function Search() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState<Movie[]>([]);
  const query = searchParams.get("q");

  useEffect(()=> {
    fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    )
    .then((response) => response.json())
    .then((json) => {
      setMovies(json.results);
    })
    .catch((error) => {
      console.error("ERROR ON FETCHING DATA", error);
    });

  }, [query]);

  return (
    <div>
      <h2 className="margin">Results related with: {query}</h2>
      <section className="grid">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} ></MovieCard>
          </div>
        ))
      ) : (
        <h2>No results found</h2>
      )}
      </section>
    </div>
  );
}

export default Search;