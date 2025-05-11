import React, { useEffect, useState } from 'react'
import '../../styles/EventSeatViewer.css'
import Buttons from '../../components/Shared/ui/Buttons';
import { useNavigate } from 'react-router-dom';
import AlertBox from '../../components/Shared/ui/AlertBox';
import AddButton from '../../components/Shared/ui/AddButton'

function SeatSelector({ event }) {

    const navigate = useNavigate();

    const [count, setCount] = useState(() => event?.seatings?.map(() => 0) || []);
    const [isActive, setIsActive] = useState(false);
    const [showAlert, setShowAlert] = useState(false)
    const [seatLength, setSeatLength] = useState(null);
    const [seatings, setSeatings] = useState('');

    const price = count.reduce((acc, curr, i) => acc + curr * event.price[i], 0);


    const handleSetCount = (index, value, seatings) => {
        const totalCount = count.reduce((acc, curr, i) => acc + (i === index ? value : curr), 0);

        if (totalCount > 10) {
            setShowAlert(true);
            return;
        }
    
        const updatedCount = [...count];
        updatedCount[index] = value;
        setCount(updatedCount);
        setSeatLength(totalCount);
        setSeatings(seatings);
    }
    useEffect(() => {
        const totalCount = count.reduce((acc, curr) => acc + curr, 0);
        setIsActive(totalCount > 0);
    
        if (totalCount >= 10) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
        }
    }, [count]);

    return (
        <div>
            <div className='event-seat-header'>
                <span className="material-symbols-outlined">
                    chevron_left
                </span>
                <div>
                    <p>{event?.title} | {event?.place}</p>
                    <p>{event?.date}</p>
                </div>

            </div>

            <div className='event-header-container'>
                <div className="event-block-header">
                    <h5>Select Tickets</h5>
                    <p>You can add upto 10 tickets Only</p>
                </div>
            </div>

            <div className='event-block-wrapper'>

                {event?.seatings?.map((seat, index) => (
                    <div className="event-block-container" key={index}>
                        <h5>{seat.toUpperCase()}</h5>
                        <div>
                            <p>₹  {event.price?.[index]}</p>
                            <AddButton
                                count={count[index]}
                                setCount={(value) => handleSetCount(index, value,seat.toUpperCase())}
                                startFromZero={true}
                                style={{ marginBottom: '60px' }} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="event-block-footer">
                {isActive &&   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',flexDirection:'column',height:'100%' ,marginBottom:'15px'}}>
                    <h5 style={{ color: '#e1e1e1' }}>Total</h5>
                    <p>₹ {price}</p>
                </div> }
                <Buttons
                    buttonSize={'btns--medium'}
                    buttonStyle={`${isActive ? 'btns--theme--violet' : 'btns--theme--grey'}`}
                    type={'button'}
                    onClick={() => navigate('/ticketoptions', {state: {event: event, price: price, seatCount: seatLength, seatings:seatings}})}
                    style={{ width: `${isActive ? '100px' : '300px'}`, cursor: `${isActive ? 'pointer' : 'not-allowed'}` }}>
                    Proceed
                </Buttons>

            </div>
            {showAlert && <AlertBox message={'You can only add upto 10 tickets'} onOk={() => setShowAlert(false)} />}
        </div>
    )
}

export default SeatSelector