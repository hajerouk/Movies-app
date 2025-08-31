import React from "react";

// Composant pour filtrer les films par titre et par note
export default function Filter({
  titleFilter,
  onTitleChange,
  rateFilter,
  onRateChange,
}) {
  return (
    <div className="filter-container">
      {/* Filtre par titre */}
      <input
        type="text"
        value={titleFilter}
        onChange={(e) => onTitleChange(e.target.value)}
        placeholder="🔎 Rechercher par titre"
      />

      {/* Filtre par note */}
      <select
        value={rateFilter}
        onChange={(e) => onRateChange(Number(e.target.value))}
      >
        <option value={0}>Toutes les notes</option>
        <option value={1}>≥ 1</option>
        <option value={2}>≥ 2</option>
        <option value={3}>≥ 3</option>
        <option value={4}>≥ 4</option>
        <option value={5}>5 uniquement</option>
      </select>
    </div>
  );
}
