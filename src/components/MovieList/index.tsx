import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Movie, getImg } from "../../utils/movieUtils";

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.results);
      })
      .catch((error) => {
        console.error("ERROR ON FETCHING DATA", error);
      });
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <img src={getImg(movie.backdrop_path)} alt={movie.title} />
          <button onClick={()=> {navigate(`/movie/${movie.id}`)}}>Go to details</button>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
