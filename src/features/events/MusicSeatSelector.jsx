import React from 'react'
import '../../styles/EventSeatViewer.css'
import { useNavigate } from 'react-router-dom';
import Buttons from '../../components/Shared/ui/Buttons';
import AddButton from '../../components/Shared/ui/AddButton';

function EventSeatSelector({event, selectedBlock, count, setCount, price, tax, setSelectedBlock, formattedPrice, formattedTotal}) {
    const navigate = useNavigate();
  return (
    <div>
        <div className='event-seat-header'>
        <span class="material-symbols-outlined" onClick={() => setSelectedBlock('')}>
          chevron_left
        </span>
        <div>
        <p>{event?.title} | {event?.place}</p>
        <p>{event?.date}</p>
        </div>

      </div>
      <div className='event-seat-container'>
        <div className="event-seat-wrapper">
          <h4>{selectedBlock}</h4>
          <div>
            <h5>₹ {formattedPrice}</h5>
            <AddButton count={count} setCount={setCount} />
          </div>
          <span className='hr-line' style={{ width: '100%', marginTop: '20px', height: '1px', backgroundColor: '#bcbcbc90' }} />
          <p>Ticket Inclusions : </p>
          <ul className='aligned-list'>
            <li> Each ticket accommodates 1 person.</li>
            <li>Move and groove in this standing zone to {event?.artist}'s greatest hits along with your friends.</li>
            <li>An assortment of food and beverage pop-ups (non-alcoholic) specially curated for you to purchase.</li>
          </ul>
        </div>
      </div>
      <div className='event-seat-footer-container'>
        <div className='event-seat-footer'>
          <div className='event-seat-footer-details'>
            <h5>₹{formattedTotal}</h5>
            <p>{count} Ticket(s)</p>
          </div>

          <Buttons buttonSize={'btns--medium'} buttonStyle={'btns--theme--violet'} type={'button'} onClick={() => {
            navigate('/payment', {
              state: { event: event, selectedEventBlock: selectedBlock, totalPrice: formattedTotal, tickets: count, price: price, tax: tax }
            })
          }}>
            Pay Now
          </Buttons>

        </div>
      </div>
    </div>
  )
}

export default EventSeatSelector