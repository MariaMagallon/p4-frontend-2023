import React, { useEffect, useState } from "react";

interface Movie {
  id: number;
  title: string;
}

function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`)
        .then((response) => response.json())
        .then((json) => {
            setMovies(json.results);
        })
        .catch((error) => {
            console.error("ERROR ON FETCHING DATA", error);
        });
    }, []);

    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <h1>{movie.title}</h1>
                </div>
            ))}
        </div>
    );
}

export default MovieList;
