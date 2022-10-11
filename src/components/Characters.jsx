import React, { useState, useReducer, useMemo, useRef, useCallback } from "react";
import { useCharacters } from "../hooks/useCharacters";
import "../styles/Characters.css"
import { Search } from "./Search";
const API = "https://rickandmortyapi.com/api/character";

const initialState = {
  favorites: [],
};


const Characters = () => {
  
  const [search, setSearch] = useState("");
  const searchInput = useRef(null)

  const characters= useCharacters(API)


  const handleSearch= useCallback(()=>{
    setSearch(searchInput.current.value)
  },[])
 
  const filteredUsers= useMemo(()=>
    characters.filter((user)=>{
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
      [characters,search]
  )

  return (
    <section className="main-container" >
     
    <Search 
      search={search}
      searchInput={searchInput}
      handleSearch={handleSearch}
    />
    
    <div className="character-container">
      {filteredUsers.map((character) => (
        <div className="character-card" key={character.id} >
          <div className="character-info">
            <p key={character.name}>{character.name}</p>
          </div>
          <img src={character.image} key={character.id} />
         </div>
      ))}
      </div>
    </section>
  );
};

export { Characters };
