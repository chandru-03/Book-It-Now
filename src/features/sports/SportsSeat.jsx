import React, { useState } from 'react';
import '../../styles/Sports.css';
import { useLocation, useNavigate } from 'react-router-dom';
import FilterBy from '../../components/Shared/ui/FilterBy';
import CricketSeats from './CricketSeats';
import SeatSelector from './SeatSelector';
import CountDown from '../../components/Shared/ui/CountDown';
import { useDispatch, useSelector } from 'react-redux';
import { Block } from '../../redux/slice/StadiumSlice';
import SportsSeatMap from './SportsSeatMap';
import Buttons from '../../components/Shared/ui/Buttons';

function SportsSeat() {
    const navigate = useNavigate();
    const location = useLocation();
    const match = location.state?.match;

    const dispatch = useDispatch();
    const { blockRows, blockCols } = useSelector((state) => state.stadium);

    const [selectedBlock, setSelectedBlock] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    const [blockPrice, setBlockPrice] = useState(null)
    const [price, setPrice] = useState([]);
    const [filterBy, setFilterBy] = useState();

    const selectedSeat = () => {

        return selectedSeats.length === 0 ? 'btns--theme--violet--not--active' : 'btns--theme--violet'
    }

    const selectedSeatClick = () => {
        if (selectedSeats.length === 0) {
            setShowAlert(true);

        }
        else {
            navigate('/ticketoptions', { state: { match: match, selectedSeats: selectedSeats, selectedBlock: selectedBlock, price: price } });

        }
    }


    const handleBlockClick = (block) => {
        dispatch(Block(block));
        setSelectedBlock(block);
    };

    return (
        <div>
            <div className="sports-seat-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', justifyContent: 'flex-start' }}>
                    <span class="material-symbols-outlined" style={{ justifyContent: 'flex-start', float: 'left', color: '#d3d3d3', cursor: 'pointer' }} onClick={() => window.history.back()}>
                        chevron_left
                    </span>
                    <div>
                        <p>You have approximately</p>
                    </div>
                    <CountDown countdownTime={6} fontSize="medium" color="#d3d3d3" />
                    <p>to select your seats</p>
                </div>
            </div>

            <div className='seat-selector-wrapper'>
                <div className='seat-selector'>
                    <SeatSelector match={match} selectedSeats={selectedSeats} selectedBlock={selectedBlock} price={blockPrice} />
                </div>
                <div className='seat-selector-respnosive'>
                    <p>{match.team1} VS {match.team2}</p>
                    <div>
                        <span>Selected Seats : {selectedSeats.join(', ')}</span>
                        <button className={`btns--small ${selectedSeat()}`} style={{ cursor: `${selectedSeats.length === 0 ? 'not-allowed' : 'pointer'}` }} onClick={selectedSeatClick}>Book Now</button>
                    </div>
                </div>
                <div className='seat-respnosive-bg'>
                </div>

                <div className='seat-map-container'>
                    {selectedBlock ? (
                        <div>
                            <CricketSeats selectedBlock={selectedBlock} match={match} row={blockRows} col={blockCols} price={blockPrice} onClick={() => setSelectedBlock(null)} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} closeSeats={setSelectedBlock} />
                        </div>
                    ) : (
                        <div className='seat-map'>
                            <SportsSeatMap setBlockName={handleBlockClick} setBlockPrice={setBlockPrice} item={match?.venue} setPrice={setPrice} filterBy={filterBy} />
                        </div>

                    )}

                </div>
            </div>
            {!selectedBlock && <FilterBy price={price} setFilterBy={setFilterBy} filterBy={filterBy} />}
        </div>
    );
}

export default SportsSeat;