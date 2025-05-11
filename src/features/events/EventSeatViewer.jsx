import React, { useState } from 'react'
import '../../styles/EventSeatViewer.css'
import MusicSeatSelector from './MusicSeatSelector';
import ComedySeatSelector from './SeatSelector';

function EventSeatViewer({ selectedBlock, event, price, tax, setSelectedBlock, type }) {
  const [count, setCount] = useState(1);
  const formattedPrice = price
  const formattedTotal = (price * count)
  console.log('Type:', type);
  
  return (
    <div>
      <MusicSeatSelector
        selectedBlock={selectedBlock}
        count={count}
        setCount={setCount}
        event={event}
        price={price}
        tax={tax}
        setSelectedBlock={setSelectedBlock}
        formattedPrice={formattedPrice}
        formattedTotal={formattedTotal} />
    </div>
  )
}

export default EventSeatViewer