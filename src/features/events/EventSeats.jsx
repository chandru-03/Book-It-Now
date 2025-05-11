import React, { useState } from 'react'
import EventBlocks from './EventBlocks';
import EventSeatViewer from './EventSeatViewer';
import { useLocation } from 'react-router-dom';
import ComedySeatSelector from './SeatSelector';
import DanceSeatSelector from './DanceSeatSelector';

function EventSeats() {
    const location = useLocation();
    const event = location.state?.event;
    const type = location.state?.type;

    const [selectedBlock, setSelectedBlock] = useState(null);
    const [tax, setTax] = useState(0);
    const [price, setPrice] = useState(0);


    const handleBlockClick = (block, price) => {
        setSelectedBlock(block);
        setPrice(price);
        setTax(price * 0.059);
    }



    return (
        <div>
            {type === 'Music Shows' && selectedBlock ? (
                <EventSeatViewer selectedBlock={selectedBlock} setSelectedBlock={setSelectedBlock} price={price} event={event} tax={tax} type={type} />
            ) : (
                <div style={{marginTop: '20rem'}}>
                    <EventBlocks onBlockClick={handleBlockClick} venue={event.place} type={type} />
                </div>
            )}

            {type === 'Comedy Shows' && (
                <ComedySeatSelector event={event} />
            )}


            {
                type === 'Dance Shows' && (
                    <DanceSeatSelector event={event} />
                )
            }



        </div>
    )
}

export default EventSeats