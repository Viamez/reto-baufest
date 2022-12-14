import React, { useEffect, useState } from 'react'

const useApi = (url) => {
  const [date, setDate]= useState([]);
  useEffect(()=>{
    fetch(url)
        .then(response=>response.json())
        .then(data=>setDate(data.results))
  },[url]);
  return date
}

export {useApi}