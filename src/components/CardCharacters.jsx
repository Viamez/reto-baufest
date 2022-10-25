import React from "react";
import { useApi } from "../hooks/useApi";
import { useCharacter } from "../hooks/useCharacter";
import "../styles/Characters.css";
import { Search } from "./Search";

const CardCharacters = () => {
  const APICharacter = "https://rickandmortyapi.com/api/character";
  const APIEpisodes = "https://rickandmortyapi.com/api/episode";
  const characters = useApi(APICharacter);
  const episodes = useApi(APIEpisodes);
  characters.forEach((element) => {
    element.episodesName = [];
  });

  characters.forEach((dato) => {
    episodes.forEach((element) => {
      if (dato.episode.includes(element.url)) {
        dato.episodesName.push(element.name.toLowerCase());
      }
    });
  });
  console.log(characters)
  const [search, handleSearch, filteredDato] = useCharacter(characters);
  
  return (
    <section className="main-container">
      <Search search={search} handleSearch={handleSearch} />
      <div className="character-container">
        {filteredDato.map(character => (
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

export { CardCharacters };
