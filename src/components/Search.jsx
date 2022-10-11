import React from 'react'
import "../styles/Search.css"
const Search = ({search, searchInput, handleSearch}) => {
  return (
    <div className="Search-container">
      <input 
        className="Search-character" 
        placeholder='Busca tu personaje'
        type='text' 
        value={search} 
        onChange={handleSearch} 
        ref={searchInput}
      />
     </div>
  )
}

export {Search}