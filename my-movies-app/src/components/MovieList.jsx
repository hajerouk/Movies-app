import React from "react";
import MovieCard from "./MovieCard";

// Composant pour afficher la liste des films
export default function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((m) => <MovieCard key={m.id} movie={m} />)
      ) : (
        <p>Aucun film trouvé 🎥</p>
      )}
    </div>
  );
}
