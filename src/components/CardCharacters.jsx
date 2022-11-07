import React, { useReducer, useState } from "react";
import { useApi } from "../hooks/useApi";
import { useCharacter } from "../hooks/useCharacter";
import { useComparate } from "../hooks/useComparate";
import { Modal } from "../Modal";
import "../styles/Characters.css";
import { Characters } from "./Characters";
import { Comparate } from "./Comparate";
import { Search } from "./Search";
const APICharacter = "https://rickandmortyapi.com/api/character";
const APIEpisodes = "https://rickandmortyapi.com/api/episode";
const APILocation = "https://rickandmortyapi.com/api/location";
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
  const location = useApi(APILocation);
  const [comparar, dispatch] = useReducer(reducer, initialState);

  const [search, handleSearch, filteredDato, aleatorio, filteredLocation,filteredEpisode] = useCharacter(
    characters,
    episodes,
    location
  );
  const handleClick = (comparative) => {
    if(comparar.comparateList.length <3 && !comparar.comparateList.includes(comparative)){
      dispatch({ type: "ADD_TO_COMPARATIVE", payload: comparative });
    }
  };
  const [episodesMap, compararCharacters, openModal, setOpenModal, firstSecond, firstThird, secondThird] =
    useComparate(comparar);
  return (
    <section className="main-container">
      <div className="search-comparate">
        <Search search={search} handleSearch={handleSearch} />
        <Comparate
          compararCharacters={compararCharacters}
          episodesMap={episodesMap}
        />
      </div>
      <Characters
        filteredDato={filteredDato}
        filteredLocation={filteredLocation}
        handleClick={handleClick}
        aleatorio={aleatorio}
        search={search}
        characters={characters}
        episodes={episodes}
        locations={location}
        filteredEpisode={filteredEpisode}

      />
      {openModal && (
        <Modal
        setOpenModal={setOpenModal}
        comparar={comparar}
        firstSecond={firstSecond}
        firstThird={firstThird}
        secondThird={secondThird}
        episodesMap={episodesMap}
        />
      )}
    </section>
  );
};

export { CardCharacters };
