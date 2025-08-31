import React, { useState } from "react";

// Composant formulaire pour ajouter un nouveau film
export default function AddMovieForm({ onAdd }) {
  // ---------------------------
  // 1) États locaux du formulaire
  // ---------------------------
  const [title, setTitle] = useState("");         // titre du film
  const [description, setDescription] = useState(""); // description du film
  const [posterURL, setPosterURL] = useState(""); // URL de l'affiche
  const [rating, setRating] = useState(0);        // note du film (0-5)

  // ---------------------------
  // 2) Fonction appelée à la soumission du formulaire
  // ---------------------------
  const handleSubmit = (e) => {
    e.preventDefault(); // empêche le rechargement de la page
    // Vérification simple : titre et description obligatoires
    if (!title || !description) return alert("Titre et description obligatoires");

    // Appel de la fonction passée en prop pour ajouter le film à la liste
    onAdd({ title, description, posterURL, rating });

    // Réinitialisation du formulaire pour permettre un nouvel ajout
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating(0);
  };

  // ---------------------------
  // 3) JSX : rendu du formulaire
  // ---------------------------
  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
      {/* Input pour le titre */}
      <input
        type="text"
        placeholder="Titre"
        value={title} // valeur contrôlée par l'état
        onChange={(e) => setTitle(e.target.value)} // mise à jour de l'état à chaque saisie
        style={{ marginRight: "10px", padding: "5px" }}
      />

      {/* Input pour la description */}
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />

      {/* Input pour l'URL du poster */}
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />

      {/* Input pour la note du film */}
      <input
        type="number"
        min="0"
        max="5"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))} // conversion en nombre
        style={{ marginRight: "10px", padding: "5px", width: "60px" }}
      />

      {/* Bouton pour soumettre le formulaire */}
      <button type="submit">Ajouter</button>
    </form>
  );
}
