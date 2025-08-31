import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="movie-card">
        <img src={movie.image} alt={movie.title} />
        <h3>{movie.title}</h3>
      </div>
    </Link>
  );
}

export default MovieCard;
