import React, { useState } from 'react'
import '../../styles/Sports.css'
import { useNavigate } from 'react-router-dom';

function SeatSelector({ match,selectedSeats, selectedBlock, price}) {

    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);   
   

    const selectedSeat = () =>{

        return selectedSeats.length === 0 ? 'btns--theme--violet--not--active' : 'btns--theme--violet'
    } 

    const selectedSeatClick = () =>{
        if(selectedSeats.length === 0){
            setShowAlert(true);
             
        }
        else{
           navigate('/ticketoptions',{state: {match: match, selectedSeats: selectedSeats, selectedBlock: selectedBlock, price: price}});
            
        }
    } 
    

    if(!match){
        return <div>Loading...</div>;
    }
    
    return (
        <div>
            <div className="seat-selector-container" style={{marginTop: '30px',}}>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}> 
                        <img src={match?.img1} alt={match?.team1} />
                        VS
                        <img src={match?.img2} alt={match?.team2} />
                    </div>



                    <div>
                        <h1>{match?.team1 + " vs " + match?.team2}</h1>
                    </div>

                    <div>
                        <p>{match?.date + " | " + match?.time}</p>
                    </div>

                    <div className="seat-book">
                        <p>Selected Seats: </p>
                        <p>{selectedSeats.join(', ')}</p>
                        <button className={`btns--medium ${selectedSeat()}`} style={{cursor: `${selectedSeats.length === 0 ? 'not-allowed' : 'pointer'}`}} onClick={selectedSeatClick}>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeatSelector