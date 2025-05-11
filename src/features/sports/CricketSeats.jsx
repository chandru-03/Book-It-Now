import React, { useEffect, useState } from 'react'
import '../../styles/Sports.css'
import AlertBox from '../../components/Shared/ui/AlertBox';
function CricketSeats({ selectedBlock, match, row, col, onClick, selectedSeats, setSelectedSeats}) {
    const selectTime = match?.time

    const seatRows = Array.from({ length: row }, (_, i) =>
        String.fromCharCode(65 + i)
    )
    const seatColumns = Array.from({ length: col }, (_, i) => i + 1)

    const [bookedSeats, setBookedSeats] = useState([]);
    const [alertVisible, setAlertVisible] = useState(false);

    const generateBookedSeats = () => {
        const totalSeats = seatRows.length * seatColumns.length;
        const numBookedSeats = Math.floor(totalSeats * 0.2);

        const allSeats = [];
        seatRows.forEach(row => {
            seatColumns.forEach(col => {
                allSeats.push(`${row}${col}`);
            });
        });
        const shuffledSeats = allSeats.sort(() => 0.5 - Math.random());
        return shuffledSeats.slice(0, numBookedSeats);
    };

    useEffect(() => {
        if (selectTime) {
            setBookedSeats(generateBookedSeats());
            setSelectedSeats([]);
        }
    }, [selectTime]);

    const toggleSeatSelection = (row, seat) => {
        const seatId = `${row}${seat}`;
        if (bookedSeats.includes(seatId)) return;
        setSelectedSeats(prevSeats => {
            if (prevSeats.includes(seatId)) {
                return prevSeats.filter(id => id !== seatId);
            } else {
                if (prevSeats.length >= 10) {
                    setAlertVisible(true)
                    return prevSeats;
                }

                return [...prevSeats, seatId];

            }
        });
    };

    return (
        <div>
            {selectTime && (
                <div className="sports-seats-container">
                <div className="sports-seat-layout">
                  <div className="seat-layout-header">
                    <i className="fa fa-chevron-left fa-lg" onClick={onClick}></i>
                    <h2>Seats for Block: {selectedBlock}</h2>
                  </div>
              
                  {seatRows.map((row, index) => (
                    <div key={index} className="sports-seat-row">
                      <span>{row}</span>
                      {seatColumns.map((seat, seatIndex) => {
                        const seatId = `${row}${seat}`;
                        return (
                          <div
                            key={seatIndex}
                            className={`sports-seat ${
                              bookedSeats.includes(seatId)
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

            {alertVisible && <AlertBox message={'Please select at least 10 seats'} onOk={() => setAlertVisible(false)} onCancel={() => setAlertVisible(false)}/>}
        </div>
    )
}

export default CricketSeats