import React, { useReducer, useState } from "react";
import { useApi } from "../hooks/useApi";
import { useCharacter } from "../hooks/useCharacter";
import { Modal } from "../Modal";
import "../styles/Characters.css";
import { Search } from "./Search";

const initialState = {
  comparateList: [],
};
const comparateReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_COMPARATIVE":
      return {
        ...state,
        comparateList: [...state.comparateList, action.payload],
      };
    default:
      return state;
  }
};

const CardCharacters = () => {
  const [comparar, dispatch] = useReducer(comparateReducer, initialState);
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
  const handleClick = (comparative) => {
    dispatch({ type: "ADD_TO_COMPARATIVE", payload: comparative });
  };

  const [search, handleSearch, filteredDato] = useCharacter(characters);

  let episodesMap = comparar.comparateList.map((element) => {
    const episodes = element.episodesName;
    const name = element.name;
    return { episodes, name };
  });
  function compararCharacters(datos) {
    if (datos.length == 2) {
      const firstSet = new Set(datos[0].episodes);
      const secondSet = new Set(datos[1].episodes);
      const firstSecond = [...firstSet].filter((element) =>
        secondSet.has(element)
      );
      console.log(`${datos[0].name} y ${datos[1].name}`, firstSecond);
    } else if (datos.length == 3) {
      const firstSet = new Set(datos[0].episodes);
      const secondSet = new Set(datos[1].episodes);
      const thirdSet = new Set(datos[2].episodes);
      const firstSecond = [...firstSet].filter((element) =>
        secondSet.has(element)
      );
      const firstThird = [...firstSet].filter((element) =>
        thirdSet.has(element)
      );
      const secondThird = [...secondSet].filter((element) =>
        thirdSet.has(element)
      );
      console.log(`${datos[0].name} y ${datos[1].name}`, firstSecond);
      console.log(`${datos[0].name} y ${datos[2].name}`, firstThird);
      console.log(`${datos[1].name} y ${datos[2].name}`, secondThird);
    } else {
      console.log("Solo puedes comparar un maximo de 3 personajes");
    }
  }

  return (
    <section className="main-container">
      <Modal>Aqui renderizamos las comparaciones</Modal>
      <div className="search-comparate">
        <Search search={search} handleSearch={handleSearch} />
        <button
          type="button"
          className="button-Comparate"
          onClick={() => compararCharacters(episodesMap)}
        >
          Comparar
        </button>
      </div>
      <div>
        
      </div>
      <div className="character-container">
        {filteredDato.map((character) => (
          <div className="character-card" key={character.id}>
            <img src={character.image} key={character.id} />
            <div className="character-info">
              <div>
                <p>{character.name} </p>
                <p key={character.gender}>{character.gender}</p>
                <button
                  type="button"
                  className="button-filter"
                  onClick={() => handleClick(character)}
                >
                  Comparar
                </button>
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
