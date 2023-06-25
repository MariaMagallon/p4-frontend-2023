import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(!search) return;
    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");  
  }


  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search movies"
        name="query"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button type="submit" className={styles.btn}>
          <BiSearchAlt2/>
      </button>
    </form>
  );
}

export default SearchBar;
