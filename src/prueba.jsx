import React, { useState } from "react";
import { useApi } from "../hooks/useApi";
import "../styles/Characters.css";
import "../styles/Characters2.css";
import "../styles/Search.css";
const APICharacter = "https://rickandmortyapi.com/api/character";
const APIEpisode = "https://rickandmortyapi.com/api/episode";
const Characters = () => {
  const episodes = useApi(APIEpisode);
  const characters = useApi(APICharacter);

  const totalInfo = {
    infoCharacter: characters,
    infoEpisodes: episodes,
  };

  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const setName = new Set(characters.map((dato) => dato.name));
  const setLocation = new Set(characters.map((dato) => dato.location.name));

  //Los capitulos, y los personajes que salieron
  const setCharacterUrl = new Set(characters.map((dato) => dato.url));
  const setEpisodeCharcater = new Set(episodes.map((dato) => dato.characters));
  const commonElements = [...setEpisodeCharcater].map((dato) =>
    dato.filter((element) => {
      return setCharacterUrl.has(element);
    })
  );
  // console.log(commonElements);

  //Character y los capitulos que salio
  const setCharacterEpisode = new Set(characters.map((dato) => dato.episode));
  const setEpisodeUrl = new Set(episodes.map((dato) => dato.url));
  const episodeCharacter = [...setCharacterEpisode].map((dato) =>
    dato.filter((element) => {
      return setEpisodeUrl.has(element);
    })
  );
  console.log(episodeCharacter);

  //Filtro
  const filteredUsers = totalInfo.infoCharacter.filter((user) => {
    const userNameCharacter = user.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const userLocation = user.location.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return userNameCharacter || userLocation;
  });
  //// Nueva logica

  return (
    <section className="main-container">
      <div>
        <input
          className="Search-character"
          placeholder="Busca tu personaje"
          type="text"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div>
        <input
          type="text"
          className="Search-character"
          placeholder="Escribe que buscarás"
          value={search}
          onChange={handleSearch}
        />
        <button type="button" onClick={buttonSearch()}>Buscar</button>
      </div>
      <div className="character-container">
        {filteredUsers.map((character) => (
          <div className="character-card" key={character.id}>
            <img src={character.image} key={character.id} />
            <div className="character-info">
              <div>
                <p>{character.name} </p>
                <p key={character.gender}>{character.gender}</p>
              </div>
              <p className="character-location" key={character.location.name}>
                {character.location.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Characters };
