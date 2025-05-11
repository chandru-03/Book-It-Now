import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/OrderSummary.css';

function OrderSummary({ setTotalAmount }) {
    const location = useLocation();
    const state = location.state || {};

    const {
        match: item,
        seatId: movieSeats,
        total: movieTotal,
        cinema: movieTheatre,
        selectedTime: movieTime,
        date: movieDate,
        tax: movieTax,
        tickets: ticket,
        seatings: seatings,
        totalPrice: eventTotalPrice,
        selectedEventBlock: eventBlock,
        tax: eventTax,
        selectedSeat,
        amount,
        selectedBlock,
        bookingFee,
        movie,
        price,
        event,
        seatCount,
        total,
        eventTaxAmount,
        subTotal,
        language:language
 
    } = state;

    const ticketCount = item
        ? selectedSeat?.length
        : movieSeats
        ? movieSeats.length
        : event
        ? seatCount
        : ticket;
 
        
    const movieTicketTax = () =>
        Math.round((movieTax * (movieSeats?.length || 0)) * 100) / 100 || 0;

    const eventTicketTax = () =>
        Math.round((eventTax + ticket) * 100) / 100 || 0;

    const totalAmount = item
        ? amount * selectedSeat?.length + bookingFee * selectedSeat?.length
        : movieTotal
        ? movieTotal + movieTicketTax()
        : eventTotalPrice + eventTicketTax();

    setTotalAmount(totalAmount);

    return (
        <div className="container ticket-container">
            <p>Order Summary</p>
            <div className="optional-outlines">
                <img
                    src={
                        item
                            ? item.img
                            : movie
                            ? movie.img
                            : event?.img
                    }
                    alt="Poster"
                    width="40%"
                    style={{
                        padding: '10px',
                        borderRadius: '20px',
                        objectFit: 'cover'
                    }}
                />
                <h5>
                    {item
                        ? `${item.team1} vs ${item.team2}`
                        : movie
                        ? movie.title
                        : event?.title}
                </h5>
                <div>
                    <p>{ticketCount} Ticket(s)</p>
                    <p>₹ {(item
                        ? amount
                        : price 
                        ? price
                        : movieTotal
                        ? movieTotal
                        : eventTotalPrice || price
                    )?.toLocaleString('en-IN')}</p>
                </div>
                <span className="hr-line" style={{ width: '100%', height: '1px', backgroundColor: '#bcbcbc20' }} />
                <p>
                    {item
                        ? `${item.date} ${item.time}`
                        : movie
                        ? `${movieDate?.date} ${movieDate?.day} ${movieDate?.month} ${movieTime}`
                        : event?.date}
                </p>
                <p>
                    {item
                        ? `${item.venue}, ${item.location}`
                        : movieTheatre
                        ? `${movieTheatre.name}, ${movieTheatre.location}`
                        : `${event?.place}, ${event?.address}`}
                </p>
                <span className="hr-line" style={{ width: '100%', height: '1px', backgroundColor: '#bcbcbc20' }} />
                <h5>
                    {item
                        ? `${selectedBlock} - ${selectedSeat?.join(', ')} - ${selectedSeat?.length} Ticket(s)`
                        : movieSeats
                        ? `${movieSeats.join(', ')} - ${movieSeats.length} Ticket(s)`
                        : eventBlock ? eventBlock : seatings}
                </h5>
            </div>

            <span className="dotted-line" style={{ marginTop: event ? '50px' : '0px' }} />

            <div className="optional-outlines" style={{ border: 'none' }}>
                <div>
                    <p>Sub-total</p>
                    <p>
                        ₹ {(item
                            ? amount
                            : subTotal
                            ? subTotal * seatCount
                            : movieTotal
                            ? movieTotal
                            :eventTotalPrice
                        )?.toLocaleString('en-IN')}
                    </p>
                </div>
                <div>
                    <p>Booking Fee</p>
                    <p>
                        ₹ {(bookingFee
                            ? bookingFee
                            : movieTotal
                            ? movieTicketTax()
                            : eventTax
                        )?.toLocaleString('en-IN')}
                    </p>
                </div>
                {eventTaxAmount && (
                    <div>
                        <p>Tax</p>
                        <p>₹ {eventTaxAmount}</p>
                    </div>
                )}
                 <span className="hr-line" style={{ width: '100%', height: '1px', backgroundColor: '#bcbcbc20' }} />
                <div>
                    <h5>Total Amount</h5>
                    <h5>₹ {(total || totalAmount)?.toLocaleString('en-IN')}</h5>
                </div>
                <span className="hr-line" style={{ width: '100%', height: '1px', backgroundColor: '#bcbcbc20' }} />
                <div>
                    <i className="fa fa-info-circle" style={{ color: "#bcbcbc70", marginBottom: '18px' }}></i>
                    <p>By proceeding, I express my consent to complete this transaction.</p>
                </div>
            </div>
        </div>
    );
}

export default OrderSummary;
