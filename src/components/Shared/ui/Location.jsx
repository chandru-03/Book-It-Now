import React, { useContext, useState } from 'react';
import '../../../styles/Location.css';
import locations from '../list/LocationLists';
import { LocationContext } from '../../../context/LocationContext';
import ProgressBar from './ProgressBar';

export default function Location({ closePopup, UpdatedLocation }) {
    const { setLocation } = useContext(LocationContext);
    const [showProgress, setShowProgress] = useState(false);

    const handleLocationChange = (newLocation) => {
        setLocation(newLocation);
        
        if (UpdatedLocation) {
            UpdatedLocation(newLocation);
        }
        localStorage.setItem('location', newLocation);
        setShowProgress(true);
    };

    const handleProgressComplete = () => {
        if (closePopup) {
            closePopup();
        }
        window.location.reload();
    };

    return (
        <div className="location-popup">
            <div className="location-container">
                <div className="location-header">
                    <h1>Location</h1><br />
                    <i className="fa-solid fa-xmark fa-xl" onClick={closePopup}></i>
                </div>
                <div className="location-box">
                    {locations?.map((loc) => (
                        <div key={loc.id} className="location-image" onClick={() => handleLocationChange(loc.name)}>
                            <img src={loc.img} alt="Location" />
                            <h3>{loc.name}</h3>
                        </div>
                    ))}
                </div>
                <br /><br />
                {showProgress && (
                    <ProgressBar 
                        message="Location Updated Successfully" 
                        navigateTo={handleProgressComplete} 
                        style={{ width: '300px', left: '35%', top: '35%' }} 
                    />
                )}
            </div>
        </div>
    );
}