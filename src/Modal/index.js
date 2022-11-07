import React from "react";
import ReactDOM from "react-dom";
import "../styles/ModalCharacter.css";
import "../styles/Modal.css";
function Modal({
  comparar,
  setOpenModal,
  firstSecond,
  firstThird,
  secondThird,
  episodesMap,
}) {
  const cerrar = () => {
    setOpenModal(false);
    comparar.comparateList = [];
  };
  return ReactDOM.createPortal(
    <div className="Modal">
      <button type="submit" onClick={cerrar} className="CreateTodoButton">
        X
      </button>

      {episodesMap.length == 2 ? (
        <section className="section-character">
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
          <p className="episodes-number">
            {episodesMap[0].name} y {episodesMap[1].name} comparten{" "}
            {firstSecond.length} episodios
          </p>
        </section>
      ) : episodesMap.length == 3 ? (
        <section className="section-character">
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

          <p className="episodes-number">
            - {episodesMap[0].name} y {episodesMap[1].name} comparten{" "}
            {firstSecond.length} episodios <br/>
            - {episodesMap[0].name} y {episodesMap[2].name} comparten{" "}
            {firstSecond.length} episodios 
            
          </p>
          <p className="episodes-number">
            - {episodesMap[1].name} y {episodesMap[2].name} comparten{" "}
            {secondThird.length} episodios <br/>
            - {episodesMap[1].name} y {episodesMap[0].name} comparten{" "}
            {secondThird.length} episodios
          </p>
          <p className="episodes-number">
            - {episodesMap[2].name} y {episodesMap[0].name} comparten{" "}
            {firstThird.length} episodios <br/>
            - {episodesMap[2].name} y {episodesMap[1].name} comparten{" "}
            {firstThird.length} episodios
          </p>
        </section>
      ) : (
        ""
      )}
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
