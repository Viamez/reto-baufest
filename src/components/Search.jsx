import React from 'react'
import "../styles/Search.css"
const Search = ({search, searchInput, handleSearch}) => {
  return (
    <div >
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