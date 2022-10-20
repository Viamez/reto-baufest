import React, { useState } from "react";
import { useApi } from "../hooks/useApi";
import "../styles/Characters.css";
import "../styles/Characters2.css";
import "../styles/Search.css";
const APICharacter = "https://rickandmortyapi.com/api/character";
const APIEpisode = "https://rickandmortyapi.com/api/episode";




const Characters = () => {
  const episodes = useApi(APIEpisode);
  const [searchEpisode, setSearchEpisode] = useState("");
  const handleSearchEpisode = (event) => {
    setSearchEpisode(event.target.value);
  };
  
  const characters = useApi(APICharacter);
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const setEpisode= new Set(episodes.map(dato=>dato.characters))
  const setUrl =[...new Set(characters.map(dato => dato.url))]
  const setName =[...(new Set(characters.map((dato) => (dato.name))))]
  const setLocation =[...(new Set(characters.map((dato) => (dato.location.name))))]

  const firstSet = new Set([1, 2, 3, 4, 5]);
  const secondSet = new Set([
                              'https://rickandmortyapi.com/api/character/1', 
                              'https://rickandmortyapi.com/api/character/2', 
                              'https://rickandmortyapi.com/api/character/3', 
                              'https://rickandmortyapi.com/api/character/4', 
                              'https://rickandmortyapi.com/api/character/5'
                            ]);
const commonElements = 
[...setEpisode].map( dato=> dato.filter(element => {
  secondSet.has(element)
}))
console.log(commonElements)
// const set = new Set(commonElements);
// console.log('metodo', set)
                        




  //Filtro
  const filteredUsers = characters.filter((user) => {
    const userName = user.name.toLowerCase().includes(search.toLowerCase());
    // const userUrl = user.url.toLowerCase().includes(search.toLowerCase());
    const userLocation = user.location.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return userName || userLocation ;
  });
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
      <div className="character-container">
        {filteredUsers.map((character) => (
          
          <div 
            className="character-card" 
            key={character.id}
          >
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
