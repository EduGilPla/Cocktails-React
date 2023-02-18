import styles from "../css/MovieDetails.module.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";

export function MovieDetails() {
  const {movieId} = useParams();
  const [movie,setMovie] = useState(null);
  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
    });
  }, [movieId]);
  if (!movie)
    return null;
    const url = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img src={url} alt={movie.title} className={`${styles.col} ${styles.movieImage}`}/>
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title: </strong>{movie.title}
        </p>
        <p>
          <strong>Overview: </strong>{movie.overview}
        </p>
        <p> 
          <strong>Genres: </strong>{movie.genres.map((genre) => genre.name).join(", ")}
        </p>
      </div>
    </div>
  );
}