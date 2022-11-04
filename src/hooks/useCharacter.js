import React, { useState } from "react";
function useCharacter(infoCharacter, episodes) {
  const [search, setSearch] = useState("");
  const handleSearch = (event) => setSearch(event.target.value);
  infoCharacter.forEach((element) => (element.episodesName = []));
  infoCharacter.forEach((dato) => {
    episodes.forEach((element) => {
      if (dato.episode.includes(element.url)) {
        dato.episodesName.push(element.name.toLowerCase());
      } else {
        dato.episodesName.push("There is no episode in this season.");
      }
    });
  });

  const filteredDato = infoCharacter.filter((dato) => {
    const nameCharacter = dato.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const episodeCharacter = dato.episodesName.includes(search.toLowerCase());
    const locationCharacter = dato.location.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return nameCharacter || episodeCharacter || locationCharacter;
  });
  const aleatorio = (dato) => {
    return Math.floor(Math.random() * dato.length);
  };

  return [search, handleSearch, filteredDato, aleatorio];
}

export { useCharacter };
