import React, { useState } from "react";
function useComparate(comparar) {
    const [openModal, setOpenModal]= React.useState(false)
    let episodesMap = comparar.comparateList.map((element) => {
        const episodes = element.episodesName;
        const name = element.name;
        return { episodes, name };
      });
      function compararCharacters(datos) {
        if (datos.length == 2) {
          const firstSet = new Set(datos[0].episodes);
          const secondSet = new Set(datos[1].episodes);
          const firstSecond = [...firstSet].filter((element) =>
            secondSet.has(element)
          );
          // console.log(`${datos[0].name} y ${datos[1].name}`, firstSecond);
          setOpenModal(true)
        } else if (datos.length == 3) {
          const firstSet = new Set(datos[0].episodes);
          const secondSet = new Set(datos[1].episodes);
          const thirdSet = new Set(datos[2].episodes);
          const firstSecond = [...firstSet].filter((element) =>
            secondSet.has(element)
          );
          const firstThird = [...firstSet].filter((element) =>
            thirdSet.has(element)
          );
          const secondThird = [...secondSet].filter((element) =>
            thirdSet.has(element)
          );
          console.log(`${datos[0].name} y ${datos[1].name}`, firstSecond);
          console.log(`${datos[0].name} y ${datos[2].name}`, firstThird);
          console.log(`${datos[1].name} y ${datos[2].name}`, secondThird);
          setOpenModal(true)
        } 
      }
      return [episodesMap, compararCharacters, openModal, setOpenModal]
}

export { useComparate };