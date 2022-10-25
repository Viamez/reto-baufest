import React, { useState } from "react";
function useCharacter(infoCharacter) {
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const filteredDato = infoCharacter.filter((dato) => {
    const nameCharacter = dato.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const episodeCharacter = dato.episodesName.includes(search.toLowerCase());
    const locationCharacter = dato.location.name.toLowerCase().includes(search.toLowerCase());
    return nameCharacter || episodeCharacter || locationCharacter;
  });
  return [search, handleSearch, filteredDato];
}

export { useCharacter };
