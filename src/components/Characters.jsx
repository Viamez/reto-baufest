import React from 'react'
import "../styles/Characters.css";

const Characters = ({filteredDato, handleClick, aleatorio}) => {
  return (
    <div className="character-container">
    {filteredDato.map((character) => (
      <div className="character-card" key={character.id}>
        <div  className='name-episodes-img'>
            <img src={character.image} key={character.id} />
            <p>{character.name} </p>
            <p>{character.episodesName[aleatorio(character.episodesName)]}</p>
        </div>
        <div className="character-info">
          <div>
            <p key={character.gender}>{character.gender}</p>
            <button
              type="button"
              className="button-filter"
              onClick={() => handleClick(character)}
            >
              Comparar
            </button>
          </div>
          <p className="character-location" key={character.location.name}>
            {character.location.name}
          </p>
        </div>
      </div>
    ))}
  </div>
  )
}

export {Characters}