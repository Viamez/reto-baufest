import React from "react";
import "../styles/Characters.css";

const Comparate = ({ compararCharacters, episodesMap }) => {
  return (
    <button
      type="button"
      className="button-Comparate"
      onClick={() => compararCharacters(episodesMap)}
    >
      Comparar seleccionados
    </button>
  );
};

export { Comparate };
