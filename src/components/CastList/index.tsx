import { Cast, getImg } from "../../utils/movieUtils";
import styles from "./CastList.module.css";

type CastListProps = {
  cast: Cast[];
};

function CastList(props: CastListProps) {
  const { cast } = props;
  return (
    <div className={styles.cast}>
      {cast.map((item) => (
        <div key={item.id} className={styles.item} >
          <img className={styles.itemImg} src={getImg(item.profile_path)} alt={item.name} />
          <p className={styles.name}>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CastList;
