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
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const totalInfo = {
    infoCharacter: characters,
    infoEpisodes: episodes,
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
  const words = [
    { name: "personajes" },
    { name: "ubicacion" },
    { name: "episodios" },
  ];

  return (
    <section className="main-container">
      <div>
        <input
          type="text"
          className="Search-character"
          placeholder="Escribe que buscarás"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="character-container">
        {search.toLowerCase() === words[0].name ?
          characters.map((character) => (
              <div className="character-card" key={character.id}>
                <img src={character.image} key={character.id} />
                <div className="character-info">
                  <div>
                    <p>{character.name} </p>
                    <p key={character.gender}>{character.gender}</p>
                  </div>
                  <p
                    className="character-location"
                    key={character.location.name}
                  >
                    {character.location.name}
                  </p>
                </div>
              </div>
            )): 
            (search.toLowerCase() === words[1].name)?
            characters.map((character) => (
              <div className="character-card" key={character.id}>
                <img src={character.image} key={character.id} />
                <div className="character-info">
                  <div>
                    <p>{character.name} </p>
                    <p key={character.species}>{character.species}</p>
                  </div>
                  <p
                    className="character-location"
                    key={character.origin.name}
                  >
                    {character.origin.name}
                  </p>
                </div>
              </div>
            )):
            <p>hola2</p>

            }
      </div>
    </section>
  );
};

export { Characters };
