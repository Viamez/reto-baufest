import React, { useState } from "react";
function useCharacter(infoCharacter, episodes, locations) {
  const [search, setSearch] = useState("");
  const handleSearch = (event) => setSearch(event.target.value);
  infoCharacter.forEach((element) => (element.episodesName = []));

  infoCharacter.forEach((character) => {
    episodes.forEach((episode) => {
      if (character.episode.includes(episode.url)) {
        character.episodesName.push(episode.name.toLowerCase());
      } else {
        character.episodesName.push("There is no episode in this season.");
      }
    });
  });

  const filteredDato = infoCharacter.filter((dato) => {
    const nameCharacter = dato.name.toLowerCase().includes(search.toLowerCase());

    return nameCharacter;
  });
  const filteredLocation = locations.filter((dato) => {
    const nameLocation = dato.name.toLowerCase().includes(search.toLowerCase());
    return nameLocation;
  });
  const filteredEpisode = episodes.filter((dato) => {
    const nameEpisode = dato.name.toLowerCase().includes(search.toLowerCase());
    return nameEpisode;
  });

  const aleatorio = (dato) => {
    return Math.floor(Math.random() * dato.length);
  };

  return [
    search,
    handleSearch,
    filteredDato,
    aleatorio,
    filteredLocation,
    filteredEpisode,

  ];
}

export { useCharacter };
