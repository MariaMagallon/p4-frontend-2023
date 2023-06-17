import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Movie {
  id: number;
  title: string;
  overview: string;
}

function Detail() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`)
      .then((response) => response.json())
      .then((json) => {
        setMovie(json);
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
        </>
      )}
    </div>
  );
}

export default Detail;
