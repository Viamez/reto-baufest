import React, { useReducer, useState } from "react";
import { useApi } from "../hooks/useApi";
import { useCharacter } from "../hooks/useCharacter";
import { useComparate } from "../hooks/useComparate";
import { Modal } from "../Modal";
import { ViewComparate } from "./ViewComparate";
import "../styles/Characters.css";
import { Characters } from "./Characters";
import { Comparate } from "./Comparate";
import { Search } from "./Search";
const APICharacter = "https://rickandmortyapi.com/api/character";
const APIEpisodes = "https://rickandmortyapi.com/api/episode";
const initialState = {
  comparateList: [],
};
const reducer = (state, action) => {
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
  const episodes = useApi(APIEpisodes);
  const characters = useApi(APICharacter);
  const [comparar, dispatch] = useReducer(reducer, initialState);

  const [search, handleSearch, filteredDato, aleatorio] = useCharacter(
    characters,
    episodes
  );

  const handleClick = (comparative) => {
    dispatch({ type: "ADD_TO_COMPARATIVE", payload: comparative });
  };
  const [episodesMap, compararCharacters, openModal, setOpenModal] =
    useComparate(comparar);
  console.log(comparar.comparateList.length)
  return (
    <section className="main-container">
      <div className="search-comparate">
        <Search search={search} handleSearch={handleSearch} />
        <Comparate
          compararCharacters={compararCharacters}
          episodesMap={episodesMap}
          setOpenModal={setOpenModal}
        />
      </div>
      <Characters
        filteredDato={filteredDato}
        handleClick={handleClick}
        aleatorio={aleatorio}
      />
      <div>
        {comparar.comparateList.length ===1?
          <div>
         { comparar.comparateList.forEach((element) => {
            <p>element.name</p>
          })}
            </div>:console.log(comparar.comparateList)
        }
      </div>
    </section>
  );
};

export { CardCharacters };
