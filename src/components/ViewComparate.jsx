import React, { useReducer } from 'react'
import { useComparate } from '../hooks/useComparate'


const initialState = {
  comparateList: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_COMPARATIVE":
      return {
        ...state,
        comparateList: [...state.comparateList, action.payload],
      };
    default:
      return state;
  }
};

const ViewComparate = () => {
  const [comparar, dispatch] = useReducer(reducer, initialState);
  const [episodesMap, compararCharacters, openModal, setOpenModal] =useComparate(comparar)
  return (
    <div>
      hola
    </div>
  )
}

export {ViewComparate}