import React from "react";
import ReactDOM from "react-dom";
import "../styles/Modal.css";
function Modal({ comparar }) {
  return ReactDOM.createPortal(
    <div className="Modal">
      {comparar.comparateList.map((character) => (
        <div key={character.id}>
          <p>{character.name}</p>
          <img src={character.image} key={character.id} />
        </div>
      ))}
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
