import React from 'react'
import "../styles/Search.css"
const Search = ({search, handleSearch}) => {
  return (
    <div >
      <input 
        className="Search-character" 
        placeholder='Busca un personaje'
        type='text' 
        value={search} 
        onChange={handleSearch} 
      />
     </div>
  )
}

export {Search}