import moviesArray from "../data/movies.json"
import { MovieCard } from "./MovieCard";
import styles from "../css/MovieGrid.module.css"

export function MoviesGrid(){
  return (
    <ul className={styles.moviesGrid}>
      {moviesArray.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </ul>
  );
}