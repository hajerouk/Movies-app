// Import des dépendances React et des composants
import React, { useState, useMemo } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter"; 
import AddMovieForm from "./components/AddMovieForm";
import "./App.css";

export default function App() {
  // ---------------------------
  // 1) Films initiaux (données de base affichées au démarrage)
  // ---------------------------
  const initialMovies = [
    {
      id: 1,
      title: "Inception",
      description: "Un voleur qui s'introduit dans les rêves.",
      posterURL:
        "https://play-lh.googleusercontent.com/-qtECEmfe9yjg9w57QlILDP8Bgk5mT-cOUduloX_48y_NGYaP4dgZnrY0tUP7WX5x-vXEKhOzWL-QgFXyp4",
      rating: 5,
    },
    {
      id: 2,
      title: "Interstellar",
      description: "Voyage au-delà des étoiles.",
      posterURL:
        "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg",
      rating: 4,
    },
     {
      id: 3,
      title: "The Room",
      description: "Un drame romantique culte, souvent cité comme l'un des pires films.",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/en/8/82/The_Room_2019_poster.jpg",
      rating: 2,
    },
  ];

  // ---------------------------
  // 2) États (useState)
  // ---------------------------
  const [movies, setMovies] = useState(initialMovies); // liste des films
  const [titleFilter, setTitleFilter] = useState("");  // filtre par titre
  const [rateFilter, setRateFilter] = useState(0);     // filtre par note

  // ---------------------------
  // 3) Fonction pour ajouter un film
  // ---------------------------
  const addMovie = (movie) =>
    // On ajoute un nouvel objet film avec un id unique
    setMovies((prev) => [...prev, { ...movie, id: Date.now() }]);

  // ---------------------------
  // 4) Filtrage des films (useMemo = optimisation)
  // ---------------------------
  const filteredMovies = useMemo(
    () =>
      movies.filter(
        (m) =>
          // Filtre par titre (insensible à la casse)
          m.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
          // Filtre par note minimale
          m.rating >= rateFilter
      ),
    [movies, titleFilter, rateFilter] // recalcul si ces variables changent
  );

  // ---------------------------
  // 5) Rendu JSX (interface utilisateur)
  // ---------------------------
  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 Movie App</h1>

      {/* Composant de filtre (titre + note) */}
      <Filter
        titleFilter={titleFilter}
        onTitleChange={setTitleFilter}
        rateFilter={rateFilter}
        onRateChange={setRateFilter}
      />

      {/* Formulaire pour ajouter un nouveau film */}
      <AddMovieForm onAdd={addMovie} />

      {/* Liste des films filtrés (sous forme de cartes) */}
      <MovieList movies={filteredMovies} />
    </div>
  );
}
