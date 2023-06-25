import { useState } from "react";
import MovieList from "../components/MovieList";

function Home() {
  const [page, setPage] = useState(1);
  return (
    <>
      <MovieList page={page}/>
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1} className="page">
          Previous
        </button>
        <div className="current">{page}</div>
        <button className="page" onClick={() => setPage(page + 1)}>Next</button>
      </div>
      
    </>
  );
}

export default Home;
