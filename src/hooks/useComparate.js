import React from "react";
function useComparate(comparar) {
  const [openModal, setOpenModal] = React.useState(false);
  
  let firstSecond = [];
  let firstThird = [];
  let secondThird = [];
  let episodesMap = comparar.comparateList.map((element) => {
    const episodes = element.episodesName;
    const name = element.name;
    return { episodes, name };
  });
  if (episodesMap.length == 2) {
    const firstSet = new Set(episodesMap[0].episodes);
    const secondSet = new Set(episodesMap[1].episodes);
    firstSecond = [...firstSet].filter((element) => secondSet.has(element));
  } else if (episodesMap.length == 3) {
    const firstSet = new Set(episodesMap[0].episodes);
    const secondSet = new Set(episodesMap[1].episodes);
    const thirdSet = new Set(episodesMap[2].episodes);
    firstSecond = [...firstSet].filter((element) => secondSet.has(element));
    firstThird = [...firstSet].filter((element) => thirdSet.has(element));
    secondThird = [...secondSet].filter((element) => thirdSet.has(element));
  }
  function compararCharacters() {
    if(episodesMap.length ==2 || episodesMap.length ==3)
    setOpenModal(true);
  }
  return [
    episodesMap,
    compararCharacters,
    openModal,
    setOpenModal,
    firstSecond,
    firstThird,
    secondThird,
  ];
}

export { useComparate };
