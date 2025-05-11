import React, { useEffect, useState } from 'react'
import '../../styles/EventViewer.css';
import currentEvent from '../../components/Shared/list/EventsList'
import { useNavigate, useParams } from 'react-router-dom';
import Buttons from '../../components/Shared/ui/Buttons';
import EventGuide from './EventGuide';
import EventInfo from '../../components/Shared/ui/EventInfo';

function EventViewer() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const text = event?.description
    const [type, setType] = useState('');

    const [showInfo, setShowInfo] = useState(false);

    const truncatedText = text ? text?.split('.').splice(0, 1).join('. ') + "..." : '';

    useEffect(() => {
        const foundEvent = currentEvent.find((e) => e.id === parseInt(id));
        setEvent(foundEvent);
    }, [id]);

    const handleBook = () => {
        setType(event?.category)
        navigate('/eventSeat', { state: { event: event, type: event?.category } })
    }

    if (!event) {
        return <h2>Movie not found</h2>;
    }

    return (
        <div>
            <div className="event-wrapper">
                <div className="event-info">
                    <div>
                        <img src={event?.lgImg} alt="" />
                    </div>
                    <div className="event-details">
                        <h2 style={{ textAlign: 'center', marginRight: '20px' }}>{`${event?.artist}'s - ${event?.title}`}</h2>
                        <div>
                            <p><i className="fa fa-clock-o"></i> {event?.date} | {event?.time}</p>
                            <p><i className="fa fa-bookmark"></i> {event?.type}</p>
                            <p><i className="fa fa-location-arrow" aria-hidden="true"></i> {event?.place}</p>
                            <span className='hr-line' style={{ width: "100%", height: '1.5px', background: '#d3d3d320', margin: '0', padding: '0', }} />
                            <div className="event-pricing">
                                <p>Starts from ₹{event?.price[0]}</p>
                                <Buttons buttonSize={'btns--medium'} buttonStyle={'btns--theme--violet'} type={'button'} style={{ zIndex: '1' }} onClick={handleBook}>
                                    Book Now
                                </Buttons>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='event-info'>
                    <div>
                        <div className="container event-about">
                            <h5>About the Event</h5>
                            <div>
                                <p>{show ? text : truncatedText}</p>
                                <button
                                    onClick={() => setShow(!show)}>
                                    {show ? "Read less" : "Read more"}
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <span className='hr-line' style={{ width: "90%", height: '1.5px', background: '#d3d3d320', margin: '0', padding: '0' }} />
                <div className='event-info'>
                    <h2 className='event-info-head'>Event Guide</h2>
                    <div>
                        <span onClick={() => setShowInfo(true)}>See All <i className="fa-solid fa-caret-right"></i></span>
                    </div>
                </div>
                <EventInfo item={event} />
                <br /><br />
                <br />
                <span className='hr-line' style={{ width: "90%", height: '1.5px', background: '#d3d3d320', margin: '0', padding: '0' }} />
                <div className='event-info'>
                    <h2>Artist</h2>
                </div>
                <div className="artist-wrapper">
                    <img src={event?.artistImg} alt="" />
                    <div className="artist-info">
                        <h2>{event?.artist}</h2>
                        <p>{event?.artistDesc}</p>
                    </div>
                </div>
                <br /><br />
                <span className='hr-line' style={{ width: "90%", height: '1.5px', background: '#d3d3d320', margin: '0', padding: '0' }} />
                <br />
                <div className='venue-info'>
                    <h2>Venue</h2>
                    <div className='venue-wrapper'>
                        <h4>{event?.place}</h4>
                        <p>{event?.address}</p>
                    </div>
                </div>

            </div>
            {showInfo && <EventGuide item={event} close={() => setShowInfo(false)} />}
        </div>
    )
}

export default EventViewer