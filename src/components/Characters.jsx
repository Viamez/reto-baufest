import React from "react";
import "../styles/Characters.css";

const Characters = ({
  filteredDato,
  handleClick,
  aleatorio,
  search,
  characters,
  episodes,
  locations,
  filteredLocation,
  filteredEpisode,
}) => {
  const name = characters.map((element) => element.name.toLowerCase());
  const location = locations.map((element) => element.name.toLowerCase());
  const episode = episodes.map((element) => element.name.toLowerCase());
  return (
    <div className="character-container">
      {name.includes(search.toLowerCase())
        ? filteredDato.map((character) => (
            <div className="character-card" key={character.id}>
              <div className="name-episodes-img">
                <img src={character.image} />
                <p>{character.name} </p>
                <p>
                  {character.episodesName[aleatorio(character.episodesName)]}
                </p>
              </div>
              <div className="character-info">
                <div>
                  <p>{character.gender}</p>
                </div>
                <p className="character-location">{character.location.name}</p>
              </div>
            </div>
          ))
        : location.includes(search.toLowerCase())
        ? filteredLocation.map((character) => (
            <div className="character-card" key={character.id}>
              <div className="name-episodes-img">
                <p>{character.name} </p>
                <p>{character.type} </p>
                <p>{character.dimension} </p>
                <p>Cantidad de residentes: {character.residents.length} </p>
                <p>Creado el: {character.created}</p>
              </div>
            </div>
          ))
        : episode.includes(search.toLowerCase())
        ? filteredEpisode.map((character) => (
            <div className="character-card" key={character.id}>
              <div className="name-episodes-img">
                <p>{character.name} </p>
                <p>{character.air_date} </p>
                <p>{character.episode} </p>
              </div>
            </div>
          ))
        : filteredDato.map((character) => (
            <div className="character-card" key={character.id}>
              <div className="name-episodes-img">
                <img src={character.image} />
                <p>{character.name} </p>
                <p>
                  {character.episodesName[aleatorio(character.episodesName)]}
                </p>
              </div>
              <div className="character-info">
                <div>
                  <p>{character.gender}</p>
                  <button
                    type="button"
                    className="button-filter"
                    onClick={() => handleClick(character)}
                  >
                    Comparar
                  </button>
                </div>
                <p className="character-location">{character.location.name}</p>
              </div>
            </div>
          ))}
    </div>
  );
};

export { Characters };
