import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movies"
        name="query"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button type="submit">
          Search
        </button>
    </form>
  );
}

export default SearchBar;
