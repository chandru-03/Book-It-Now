import React, { useEffect, useState } from 'react'
import NarendraModiStadium from '../../maps/stadiums/NarendraModiStadium';
import HPCAStadium from '../../maps/stadiums/HPCAStadium';
import RGICStadium from '../../maps/stadiums/RGICStadium';
import EdenGardensStadium from '../../maps/stadiums/EdenGardensStadium';
import EkanaStadium from '../../maps/stadiums/EkanaStadium';
import ArunJaitleyStadium from '../../maps/stadiums/ArunJaitleyStadium';

function SportsSeatMap({setBlockName,setBlockPrice,item,setPrice,filterBy}) {
    const [selectedStadium, setSelectedStadium] = useState('');

    useEffect(() => {
        setSelectedStadium(item);
    }, [setSelectedStadium]);
  return (
    <div>
        {
            selectedStadium === 'Narendra Modi Stadium' && (
                <NarendraModiStadium setBlockName={setBlockName} setBlockPrice={setBlockPrice} setPrice={setPrice} filterBy={filterBy} />
            )
        }
        {
            selectedStadium === 'Himachal Pradesh Cricket Association Stadium' && (
                <HPCAStadium setBlockName={setBlockName} setBlockPrice={setBlockPrice} setPrice={setPrice} filterBy={filterBy} />
            )
        }
        {
            selectedStadium === 'Rajiv Gandhi International Cricket Stadium' && (
                <RGICStadium setBlockName={setBlockName} setBlockPrice={setBlockPrice} setPrice={setPrice} filterBy={filterBy} />
            )
        }
        {
            selectedStadium === 'Eden Gardens' && (
                <EdenGardensStadium setBlockName={setBlockName} setBlockPrice={setBlockPrice} setPrice={setPrice} filterBy={filterBy} />
            )
        }
        {
            selectedStadium === 'Ekana Cricket Stadium' && (
                <EkanaStadium setBlockName={setBlockName} setBlockPrice={setBlockPrice} setPrice={setPrice} filterBy={filterBy} />
            )
        }
        {
            selectedStadium === 'Arun Jaitley Stadium' && (
                <ArunJaitleyStadium setBlockName={setBlockName} setBlockPrice={setBlockPrice} setPrice={setPrice} filterBy={filterBy} />
            )
        }

    </div>
  )
}

export default SportsSeatMap
