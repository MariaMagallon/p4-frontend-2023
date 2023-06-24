import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie, getImg } from "../utils/movieUtils";

function Detail() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=credits`)
      .then((response) => response.json())
      .then((data) => {
        const director = data.credits.crew.find((member: any) => member.job === "Director")?.name || "Director not found";
        const movieObject: Movie = {
          ...data,
          director: director
        }
        setMovie (movieObject);
      })
      .catch((error) => {
        console.error("ERROR ON FETCHING DATA", error);
      });
  }, [id]);

  return (
    <div>
      {movie && (
        <>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <img src={getImg(movie.backdrop_path)} alt={movie.title} />
          <div className="row">
            <h3>Directed By: </h3>
            <h3 className="field">{movie.director}</h3>
          </div>
          <p>{movie.genres[0].name}</p>
        </>
      )}
    </div>
  );
}

export default Detail;
