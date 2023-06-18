import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Movie, getImg } from "../utils/movieUtils";

function Search() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();
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
      <h2>Results related with: {query}</h2>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
            <img src={getImg(movie.backdrop_path)} alt={movie.title} />
            <button
              onClick={() => {
                navigate(`/movie/${movie.id}`);
              }}
            >
              Go to details
            </button>
          </div>
        ))
      ) : (
        <h2>No results found</h2>
      )}
    </div>
  );
}

export default Search;