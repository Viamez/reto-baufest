import React from "react";
import ReactDOM from "react-dom";
import "../styles/ModalCharacter.css";
import "../styles/Modal.css";
import "../styles/Characters.css";
function ModalInfo({ setOpenModalInfo, characters, search }) {
  const cerrar = () => {
    setOpenModalInfo(false);
  };

  return ReactDOM.createPortal(
    <div className="Modal">
      <button type="submit" onClick={cerrar} className="CreateTodoButton">
        X
      </button>
      <div className="character-container">
        {characters.map((character) =>
          character.episodesName.includes(search) ? (
            <div className="character-card" key={character.id}>
              <div className="name-episodes-img">
                <img src={character.image} />
                <p>{character.name} </p>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>,
    document.getElementById("modalInfo")
  );
}

export { ModalInfo };
