import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        width: "200px",
        textAlign: "center",
      }}
    >
      <img
        src={movie.posterURL || "https://via.placeholder.com/200x300"}
        alt={movie.title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>⭐ {movie.rating}/5</p>
    </div>
  );
}
