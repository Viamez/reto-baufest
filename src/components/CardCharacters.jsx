import React, { useReducer, useState } from "react";
import { useApi } from "../hooks/useApi";
import { useCharacter } from "../hooks/useCharacter";
import "../styles/Characters.css";
import { Search } from "./Search";

const initialState = {
  comparativeList: [],
};
const comparativeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_COMPARATIVE":
      return {
        ...state,
        comparativeList: [...state.comparativeList, action.payload],
      };
    default:
      return state;
  }
};

const CardCharacters = () => {
  const [comparar, dispatch] = useReducer(comparativeReducer, initialState);
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
  
  let episodiosCompartidos = [];
  episodiosCompartidos = comparar.comparativeList.map((element) => {
    const episodes = element.episodesName;
    return episodes;
  });
  function compararCharacters(datos){
    if(1< datos.length <3){
      const  firstSet= new Set(datos[0])
      const  secondSet= new Set(datos[1])
      const commonElements = [...firstSet].filter(element => secondSet.has(element));
      console.log(commonElements)
      console.log(datos.length)
    }else{
      console.log('no puedes comparar mas')
    }
  }
  


  return (
    <section className="main-container">
      <div>
      <Search search={search} handleSearch={handleSearch} />
      <button type="button" onClick={()=>compararCharacters(episodiosCompartidos)} >Comparar</button>
      </div>
      <div className="character-container">
        {filteredDato.map((character) => (
          <div className="character-card" key={character.id}>
            <img src={character.image} key={character.id} />
            <div className="character-info">
              <div>
                <p>{character.name} </p>
                <p key={character.gender}>{character.gender}</p>
                <button type="button" onClick={() => handleClick(character)}>
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
