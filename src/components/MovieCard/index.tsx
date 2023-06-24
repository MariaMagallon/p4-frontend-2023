import { Link } from "react-router-dom";
import { Movie, getImg } from "../../utils/movieUtils";
import CircularRate from "../CircularRate";
import placeholder from "../../assets/placeholder.png";
import styles from "./MovieCard.module.css";

type MovieCardProps = {
    movie: Movie
}
function MovieCard(props: MovieCardProps) {
  const {movie} = props;
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className={styles.movie}>
        <img src={movie.poster_path ? getImg(movie.poster_path) : placeholder} alt={movie.title} />
        <div className="movieInfo">
          <h3>{movie.title}</h3>
          <span>
            <CircularRate value={movie.vote_average}/>
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
          <div className={styles.more}>
            <span className={styles.moreTitle}>Click on the card for more</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
