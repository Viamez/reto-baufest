import React from "react";
import "../styles/Characters.css";

const Characters = ({
  filteredDato,
  handleClick,
  aleatorio,
  search,
  filteredLocation,
  filteredEpisode,
  locations,
  episodes,
  characters,
  infoEpisode,
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
        ? filteredLocation.map((location) => (
            <div className="character-card" key={location.id}>
              <div className="name-episodes-img">
                <p>{location.name} </p>
                <p>{location.type} </p>
                <p>{location.dimension} </p>
                <p>Cantidad de residentes: {location.residents.length} </p>
                <p>Creado el: {location.created}</p>
              </div>
            </div>
          ))
        : episode.includes(search.toLowerCase())
        ? filteredEpisode.map((info) => (
            <div className="character-card" key={info.id}>
              <div className="name-episodes-img">
                <p>{info.name} </p>
                <p>{info.air_date} </p>
                <p>{info.episode} </p>
              </div>
              <button
                type="button"
                className="button-filter"
                onClick={() => infoEpisode(info)}
              >
                + info
              </button>
            </div>
          ))
        : filteredDato.map((character) => (
            <div className="character-card" key={character.id}>
              <div className="name-episodes-img">
                <img src={character.image} />
                <p>{character.name}</p>
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
