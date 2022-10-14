import React, {
  useState,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { useCharacters } from "../hooks/useCharacters";
import "../styles/Characters.css";
import "../styles/Characters2.css";
import { Search } from "./Search";
const APICharacter = "https://rickandmortyapi.com/api/character";

const Characters = () => {
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const characters = useCharacters(APICharacter);

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return (
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.location.name.toLowerCase().includes(search.toLowerCase())
        );
      }),
    [characters, search]
  );

  return (
    <section className="main-container">
      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      {!!search ? (
        <div className="character-container">
          {filteredUsers.map((character) => (
            <div className="character-card" key={character.id}>
              <img src={character.image} key={character.id} />
              <div className="character-info">
                <div>
                  <p key={character.name}>{character.name} </p>
                  <p key={character.gender}>{character.gender}</p>
                </div>
                <p className="character-location" key={character.location.name}>
                  {character.location.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="character-container">
          {filteredUsers.map((character) => (
            <div className="character-card" key={character.id}>
              <div className="character-info">
                <p key={character.name}>{character.name}</p>
              </div>
              <img src={character.image} key={character.id} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export { Characters };
