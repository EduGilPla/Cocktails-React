
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "../css/MovieGrid.module.css"
import { useEffect, useState } from "react";

export function MoviesGrid(){
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </ul>
  );
}