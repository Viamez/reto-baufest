import React from "react";
import ReactDOM from "react-dom";
import "../styles/ModalInfo.css";
function ModalInfo({ setOpenModalInfo, characters, search, infoAdd }) {
  const cerrar = () => {
    setOpenModalInfo(false);
    infoAdd.infoEpisodeList=[]
  };

  return ReactDOM.createPortal(
    <div className="Modal">
      <button type="submit" onClick={cerrar} className="CloseButton">
        X
      </button>
      <div className="character-info-modal">
        {characters.map((character) =>
          character.episodesName.includes(search.toLowerCase()) ? (
            <div className="character-card-info" key={character.id}>
              <div className="name-episodes-img-info">
                <img src={character.image} />
                <p>{character.name} </p>
                <p>{infoAdd.infoEpisodeList[0].name}</p>
              </div>
              <div className="character-info-info">
                <div>
                  <p>{infoAdd.infoEpisodeList[0].air_date} </p>
                </div>
                <p className="character-location-info">
                  {infoAdd.infoEpisodeList[0].episode}{" "}
                </p>
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
