import React, { useReducer } from "react";
import { useApi } from "../hooks/useApi";
import { useCharacter } from "../hooks/useCharacter";
import { useComparate } from "../hooks/useComparate";
import { Modal } from "../Modal";
import { Characters } from "./Characters";
import { Comparate } from "./Comparate";
import { Search } from "./Search";
import "../styles/Characters.css";
import { ModalInfo } from "../ModalInfo";
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
const initialState2 = {
  infoEpisodeList: [],
};
const reducerInfo = (state, action) => {
  switch (action.type) {
    case "ADD_TO_InforList":
      return {
        ...state,
        infoEpisodeList: [...state.infoEpisodeList, action.payload],
      };
    default:
      return state;
  }
};
const CardCharacters = () => {
  const episodes = useApi(APIEpisodes);
  const characters = useApi(APICharacter);
  const locations = useApi(APILocation);
  const [comparar, dispatch] = useReducer(reducer, initialState);

  const [
    search,
    handleSearch,
    filteredDato,
    aleatorio,
    filteredLocation,
    filteredEpisode,
  ] = useCharacter(characters, episodes, locations);
  const [
    episodesMap,
    compararCharacters,
    openModal,
    setOpenModal,
    firstSecond,
    firstThird,
    secondThird,
    openModalInfo,
    setOpenModalInfo,
  ] = useComparate(comparar);
  const handleClick = (comparative) => {
    if (
      comparar.comparateList.length < 3 &&
      !comparar.comparateList.includes(comparative)
    ) {
      dispatch({ type: "ADD_TO_COMPARATIVE", payload: comparative });
    }
  };
  const [infoAdd, dispatchInfo] = useReducer(reducerInfo, initialState2);
  const infoEpisode = (data) => {
    if (
      infoAdd.infoEpisodeList.length < 1 &&
      !infoAdd.infoEpisodeList.includes(data)
    ) 
      {dispatchInfo({ type: "ADD_TO_InforList", payload: data });
      setOpenModalInfo(true)}
  };



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
        locations={locations}
        filteredEpisode={filteredEpisode}
        infoEpisode={infoEpisode}
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

      {openModalInfo && (
        <ModalInfo
          setOpenModalInfo={setOpenModalInfo}
          characters={characters}
          search={search}
          infoAdd={infoAdd}
        />
      )}
    </section>
  );
};

export { CardCharacters };
