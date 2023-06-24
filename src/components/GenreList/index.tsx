import { Genre } from "../../utils/movieUtils";
import styles from "./GenreList.module.css";

type GenreListProps = {
  genres: Genre[];
};

function GenreList(props: GenreListProps) {
  const { genres } = props;
  return (
    <ul className={styles.genres}>
      {genres.map((item) => (
        <li key={item.id} className={styles.item} >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default GenreList;