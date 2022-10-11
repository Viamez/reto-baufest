import React, { useEffect, useState } from 'react'

const useCharacters = (url) => {
  const [characters, setCharacter]= useState([]);
  useEffect(()=>{
    fetch(url)
        .then(response=>response.json())
        .then(data=>setCharacter(data.results))
  },[url]);
  return characters
}

export {useCharacters}