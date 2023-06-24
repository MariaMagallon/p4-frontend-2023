import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cast, Genre, Movie, getImg } from "../utils/movieUtils";
import CastList from "../components/CastList";
import GenreList from "../components/GenreList";
import CircularRate from "../components/CircularRate";
import styles from "./Detail.module.css";


function Detail() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=credits`
    )
      .then((response) => response.json())
      .then((data) => {
        const director: string = data.credits.crew.find((member: any) => member.job === "Director")?.name || "Director not found";
        const date: string = data.release_date ? data.release_date : "Comming Soon";
        const backdrop: string = data.backdrop_path ? data.backdrop_path : "../assets/placeholder.png";
        const cast: Cast[] = data.credits.cast.slice(0, 5);
        const genres: Genre[] = data.genres.slice(0, 5);
        const movieObject: Movie = {
          ...data,
          director: director,
          cast: cast,
          genres: genres,
          release_date: date,
          backdrop_path: backdrop
        };
        setMovie(movieObject);
      })
      .catch((error) => {
        console.error("ERROR ON FETCHING DATA", error);
      });
  }, [id]);

  return (
    <>
      {movie && (
        <div
          className={styles.banner}
          style={{ backgroundImage: `url(${getImg(movie.backdrop_path)})` }}
        >
          <div className={styles.movieContent}>
            <div className={styles.poster}>
              <img src={getImg(movie.poster_path)} alt={movie.title} />
            </div>
            <div className={styles.info}>
              <h1 className={styles.title}>{movie.title.toUpperCase()}</h1>
              <div className="row">
                <p className={styles.date}>
                  {movie.release_date} | Directed By: {movie.director}
                </p>
                <CircularRate value={movie.vote_average}></CircularRate>
              </div>
              <div className={styles.genres}>
                <GenreList genres={movie.genres} />
              </div>
              <div className="cast">
                <h2>OVERVIEW</h2>
                <p className="overview">{movie.overview}</p>
              </div>
              <div className="cast">
                <h2>CAST</h2>
                <CastList cast={movie.cast} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;
