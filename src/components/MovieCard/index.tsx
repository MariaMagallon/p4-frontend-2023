import { Link } from "react-router-dom";
import { Movie, getColor, getImg } from "../../utils/movieUtils";
import styles from "./MovieCard.module.css";

type MovieCardProps = {
    movie: Movie
}
function MovieCard(props: MovieCardProps) {
  const {movie} = props;
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className={styles.movie}>
        <img src={getImg(movie.poster_path)} alt={movie.title} />
        <div className="movieInfo">
          <h3>{movie.title}</h3>
          <span className={getColor(movie.vote_average)}>
            ${movie.vote_average}
          </span>
        </div>
        <div className={styles.details}>
          {movie.release_date ? (
            <div className="row">
              <h3>Release Date: {movie.release_date}</h3>
            </div>
          ) : (
            <h3>Release Date: Comming Soon</h3>
          )}
          {/* <div class="row">
            <h3>Directed By: </h3>
            <h3 class="field">${film.director}</h3>
          </div> = TODO:fer components release date i director*/}
          <div className={styles.more}>
            <span className={styles.moreTitle}>Click on the card for more</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
