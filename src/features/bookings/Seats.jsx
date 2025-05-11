import React, { useState, useEffect, useContext } from 'react';
import '../../styles/Seats.css';
import CinemaScreen from '../../components/Shared/ui/CinemaScreen';
import Buttons from '../../components/Shared/ui/Buttons';
import { Link, useParams } from 'react-router-dom';
import AlertBox from '../../components/Shared/ui/AlertBox';

function Seats({movie, selectTime, selectedDate, bookedSeats, price, cinema,language}) {

    console.log('Language In Seats:', language);
    

    const seatRows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'L', 'M', 'N', 'O', 'P'];
    const seatColumns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

    const [selectedSeats, setSelectedSeats] = useState([]);
    const [alertVisible, setAlertVisible] = useState(false);
    const [message, setMessage] = useState('');

    const tax = 0.059;

    const handleTicketSelection = () => {
        if (selectedSeats.length === 0) {
            setMessage('Please select at least one seat.');
            setAlertVisible(true);
            return;
        }
    }

    const toggleSeatSelection = (row, seat) => {
        const seatId = `${row}${seat}`;
        if (bookedSeats?.includes(seatId)) return;

        setSelectedSeats(prevSeats => {
            if (prevSeats?.includes(seatId)) {
                return prevSeats.filter(id => id !== seatId);
            } else {
                if (prevSeats.length >= 10) {
                    setAlertVisible(true)
                    setMessage('You can select a maximum of 10 tickets.')
                    return prevSeats;
                }

                return [...prevSeats, seatId];
            }
        });
    };
    
    const total = () => {
        const subTotal = price * selectedSeats.length;
        return subTotal;
    }

    useEffect(() => {
        setSelectedSeats([]);
    }, [selectTime]);

    return (
        <div>
            <div className="seat-availability">
                <div className='seat-status'>
                    <span className="seat-avail" />
                    <span>Available</span>
                </div>
                <div className='seat-status'>
                    <span className="seat-avail booked" />
                    <span>Booked</span>
                </div>
                <div className='seat-status'>
                    <span className="seat-avail selected" />
                    <span>Selected</span>
                </div>
            </div>

            <div className="container seats-container">
                {selectTime && (
                    <div className="seat-show">
                        <div className="seat-layout">
                            {seatRows.map((row, index) => (
                                <div key={index} className="seat-row">
                                    <span>{row}</span>
                                    {seatColumns.map((seat, seatIndex) => {
                                        const seatId = `${row}${seat}`;
                                        return (
                                            <div
                                                key={seatIndex}
                                                className={`seat ${bookedSeats.includes(seatId)
                                                    ? 'booked'
                                                    : selectedSeats.includes(seatId)
                                                        ? 'selected'
                                                        : ''
                                                    }`}
                                                onClick={() => toggleSeatSelection(row, seat)}
                                            >
                                                {seat}
                                            </div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <CinemaScreen />
            <br /><br /><br />

            <div className="booking-footer">
                <h5>Tickets Selected : {selectedSeats.length}</h5>
                <h5>Total : Rs. {total()}</h5>
                <Buttons buttonSize={'btns--medium'} buttonStyle={'btns--theme--violet'} onClick={handleTicketSelection}>
                    <Link to={'/book'} state={{
                        selectedDate: selectedDate,
                        movie: movie,
                        selectedSeats: selectedSeats,
                        selectTime: selectTime,
                        cinema: cinema,
                        totalAmount: total(),
                        tax: tax,
                        language: language
                    }}>Pay Now</Link>
                </Buttons>
            </div>
            
            {alertVisible && (
                <AlertBox message={message}
                    onCancel={() => setAlertVisible(false)} 
                    onOk={() => setAlertVisible(false)}/>
            )}
        </div>
    );
}

export default Seats;