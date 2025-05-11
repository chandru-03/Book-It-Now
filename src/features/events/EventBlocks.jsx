import React, { useEffect, useState } from 'react'
import YMCASeatMap from '../../maps/grounds/YMCASeatMap'
import FilterBy from '../../components/Shared/ui/FilterBy'
import VelammalGroundsSeatMap from '../../maps/grounds/VelammalGroundsSeatMap';
import TerraFormArenaSeatMap from '../../maps/grounds/TerraFormArenaSeatMap';
import SuratSeatMap from '../../maps/grounds/SuratSeatMap';


function EventBlocks({ onBlockClick, venue, type }) {
  const [price, setPrice] = useState([]);
  const [filterBy, setFilterBy] = useState()
  const [slectedVenue, setSelectedVenue] = useState('');

  useEffect(() => {
    setSelectedVenue(venue);
  }, [setSelectedVenue])

  

  return (
    <div >
      {slectedVenue === 'YMCA, Chennai' && (
        <YMCASeatMap onBlockClick={onBlockClick} setPrice={setPrice} filterBy={filterBy} />
      )}

      {slectedVenue === 'Velammal Grounds' && (
        <VelammalGroundsSeatMap onBlockClick={onBlockClick} setPrice={setPrice} filterBy={filterBy} />
      )}

      {slectedVenue === 'TERRAFORM ARENA' && (
        <TerraFormArenaSeatMap onBlockClick={onBlockClick} setPrice={setPrice} filterBy={filterBy} />
      )}

      {slectedVenue === 'Khajod, C.B.Patel Cricket Stadium' && (
        <SuratSeatMap onBlockClick={onBlockClick} setPrice={setPrice} filterBy={filterBy} />
      )}

      {type === 'Music Shows' ? <FilterBy price={price} setFilterBy={setFilterBy} filterBy={filterBy} /> : ''}
    </div>
  )
}

export default EventBlocks