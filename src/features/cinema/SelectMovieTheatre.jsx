import React, { useContext, useEffect, useState } from 'react'
import { LocationContext } from '../../Component/LocationContext';

function SelectMovieTheatre() {

    const [loc, setLoc] = useState('');
    const { cinemaList, location } = useContext(LocationContext);
    console.log(`Selected location:`,location)
  useEffect(() => {
    setLoc(location);
},[location]);

  return (
    <div>
            <h2>{loc}</h2>
    </div>
  )
}

export default SelectMovieTheatre