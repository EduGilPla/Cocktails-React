import styles from "../css/MovieCard.module.css"

export function MovieCard({ movie }){
  const url = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
  <li className={styles.movieCard}>
    <img src={url} alt={movie.title} className={styles.movieImage}/>
    <div>{movie.title}</div>
  </li>)
}