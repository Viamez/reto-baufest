import React from "react";
import ReactDOM from "react-dom";
import "../styles/ModalCharacter.css";
import "../styles/Modal.css";
function Modal({ comparar, setOpenModal }) {
  const cerrar = () => {
    setOpenModal(false);
    comparar.comparateList = [];
  };
  // let firstSecond = [];
  // let firstThird = [];
  // let secondThird = [];
  // let episodesMap = comparar.comparateList.map((element) => {
  //   const episodes = element.episodesName;
  //   const name = element.name;
  //   return { episodes, name };
  // });
  // if (episodesMap.length == 2) {
  //   const firstSet = new Set(episodesMap[0].episodes);
  //   const secondSet = new Set(episodesMap[1].episodes);
  //   firstSecond = [...firstSet].filter((element) => secondSet.has(element));
  // } else if (episodesMap.length == 3) {
  //   const firstSet = new Set(episodesMap[0].episodes);
  //   const secondSet = new Set(episodesMap[1].episodes);
  //   const thirdSet = new Set(episodesMap[2].episodes);
  //   firstSecond = [...firstSet].filter((element) => secondSet.has(element));
  //   firstThird = [...firstSet].filter((element) => thirdSet.has(element));
  //   secondThird = [...secondSet].filter((element) => thirdSet.has(element));
  // }
  // console.log(firstSecond.length);

  return ReactDOM.createPortal(
    <div className="Modal">
      <button type="submit" onClick={cerrar} className="CreateTodoButton">
        X
      </button>

      {comparar.comparateList.map((character) => (
        <div className="character-card" key={character.id}>
          <div className="name-episodes-img">
            <img src={character.image} />
            <p>{character.name} </p>
          </div>
          <div className="character-info">
            <div>
              <p>{character.gender}</p>
              <p>{character.species}</p>
              <p>{character.status} </p>
            </div>
            <p className="character-location" key={character.location.name}>
              {character.location.name}
            </p>
          </div>
        </div>
      ))}
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
