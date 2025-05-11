import React, { useEffect, useState, useCallback } from 'react';
import { createContext } from "react";
import CinemaList from '../components/Shared/cinemalist/CinemaList';

export const LocationContext = createContext();

export const LocationProvider = ({children}) => {
    const [location, setLocation] = useState(localStorage.getItem('location') || "Chennai");
    const [cinemaList, setCinemaList] = useState([]);
    
    const updateLocation = useCallback((newLocation) => {
        setLocation(newLocation);
        localStorage.setItem('location', newLocation);
        setCinemaList(CinemaList[newLocation] || []);
    }, []);
    
    useEffect(() => {
        setCinemaList(CinemaList[location] || []);
    }, [location]);

    const contextValue = {
        location,
        setLocation: updateLocation,
        cinemaList
    };
  
    return (
        <LocationContext.Provider value={contextValue}>
            {children}
        </LocationContext.Provider>
    );
}

export default LocationProvider;