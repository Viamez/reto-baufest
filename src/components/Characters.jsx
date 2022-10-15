import React, { useState, useMemo } from "react";
import { useCharacters } from "../hooks/useCharacters";
import "../styles/Characters.css";
import "../styles/Characters2.css";
import "../styles/Search.css";
const APICharacter = "https://rickandmortyapi.com/api/character";

const Characters = () => {
  const characters = useCharacters(APICharacter);
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredUsers = characters.filter((user) => {
    const userName=user.name.toLowerCase().includes(search.toLowerCase()) 
    const userLocation= user.location.name.toLowerCase().includes(search.toLowerCase())
    return (userName|| userLocation)
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
      {!search?
      <div className="character-container">
      {filteredUsers.map((character) => (
        <div className="character-card" key={character.id}>
          <img src={character.image} key={character.id} />
          <div className="character-info">
            <div>
              <p key={character.name}>{character.name} </p>
              {/* <p key={character.gender}>{character.gender}</p> */}
            </div>
            {/* <p className="character-location" key={character.location.name}>
              {character.location.name}
            </p> */}
          </div>
        </div>
      ))}
    </div>:
    <div className="character-container">
    {filteredUsers.map((character) => (
      <div className="character-card" key={character.id}>
        <img src={character.image} key={character.id} />
        <div className="character-info">
          {/* <div>
            <p key={character.name}>{character.name} </p>
            <p key={character.gender}>{character.gender}</p>
          </div> */}
          <p className="character-location" key={character.location.name}>
            {character.location.name}
          </p>
        </div>
      </div>
    ))}
  </div>
    }
      
    </section>
  );
};

export { Characters };
