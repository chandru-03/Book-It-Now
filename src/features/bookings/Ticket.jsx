import React, { useEffect, useRef, useState } from 'react'
import '../../styles/Ticket.css'
import Buttons from '../../components/Shared/ui/Buttons';
import html2canvas from 'html2canvas';
import QRCode from 'qrcode';

function Ticket({ item, onClick,language }) {
    const movie = item?.state?.movie;
    const movieDate = item?.state?.date;
    const movieTheatre = item?.state?.cinema;
    const sport = item?.state?.match;
    const event = item?.state?.event;
    const seatings = item?.state?.seatings;
    
    const ref = useRef();
    const [bookingId, setBookingId] = useState('')
    const [qrCode, setQrCode] = useState('');

    useEffect(() => {
        const bookingId = Math.floor(10000 + Math.random() * 1000000) + '/' + Math.floor(1000000 + Math.random() * 100000000);
        setBookingId(bookingId)

        QRCode.toDataURL(bookingId).then(setQrCode);
    }, [])

    const handleDownload = () => {
        html2canvas(ref.current, { useCORS: true }).then((canvas) => {
            const link = document.createElement('a');
            link.download = `${movie?.title}/${bookingId}/Ticket.png`;
            link.href = canvas.toDataURL();
            link.click();
        });
    }

    return (
        <div>
            <div className='ticket-wrapper-container'>
                <div className='ticket-wrapper' ref={ref}>
                    <div className='ticket-details'>
                        <div>
                            <img src={sport
                                ? sport?.img
                                : movie ? movie?.img
                                    : event?.img}
                                alt={sport ?
                                    sport?.team1 + sport?.team2
                                    : movie ? movie?.title
                                        : event?.title} crossOrigin='anonymous' />
                            <div>
                                <p>{sport ? 'IPL 2025 ' + sport?.event : movie ? movie?.title : event?.title}</p>
                                <div>
                                    {sport ? <div><span>{sport?.team1 + ' vs ' + sport?.team2}</span></div> : movie ? <div>
                                        <span>{language}</span>&nbsp;
                                        <span style={{ color: '#bcbcbc90', marginBottom: '5px' }}>|</span>&nbsp;
                                        <span>{movie?.format}</span>&nbsp;
                                        <span style={{ color: '#bcbcbc90', marginBottom: '5px' }}>|</span>&nbsp;
                                        <span>{movie?.movieRating}</span>&nbsp;
                                    </div>
                                        : event ? <div>
                                            <span>{event?.artist}</span>&nbsp;
                                            <span style={{ color: '#bcbcbc90', marginBottom: '5px' }}>|</span>&nbsp;
                                            <span>{event?.event}</span>&nbsp;
                                            <span style={{ color: '#bcbcbc90', marginBottom: '5px' }}>|</span>&nbsp;
                                            <span>{event?.city}</span>&nbsp;
                                        </div>
                                        : ''
                                        }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ticket-separator'>
                        <div className="ticket-info">
                            <span>Booking ID</span>
                            <p>{bookingId}</p>

                            <span>Date & Time</span>
                            <p>
                                {sport ? sport?.date : movie ? movieDate?.day + ', ' + movieDate?.date + movieDate?.month : event?.date + ' | ' + event?.time}
                                {sport && movie ? <span style={{ color: '#bcbcbc90', margin: '0 5px' }}>|</span> : '' }
                                {sport ? sport?.time : ''}
                            </p>

                            <span>{sport ? 'Venue' : movie ? 'Theatre' : 'Venue'}</span>
                            <p>{sport ? sport?.venue + ', ' + sport?.location : movie ? movieTheatre?.name + ', ' + movieTheatre?.location : event?.place + ', ' + event?.address}</p>
                            {sport && movie ? 
                            <>
                                <span>{sport ? 'Block' : movie ? 'Screen' : 'Your Pit'}</span>
                                <p>{sport ? item?.state?.selectedBlock : movie ? 'Screen No.' : item?.state?.selectedEventBlock}</p>
    
                                <span>Seats</span>
                                <p>{sport ? item?.state?.selectedSeat.join(', ') : movie ? item?.state?.seatId?.join(', ') : item?.state?.tickets}</p>
                                </>
                                : seatings ? <>
                                <p>Seatings</p>
                                <span>{seatings}</span>
                                </>
                                : ''
                                }

                        </div>
                        <img src={qrCode} alt="" />
                    </div>


                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', width: '80%' }}>
                        <Buttons type={'button'} buttonSize={'btns--medium'} buttonStyle={'btns--theme--violet'} onClick={handleDownload}>Download</Buttons>
                        <Buttons type={'button'} buttonSize={'btns--medium'} buttonStyle={'btns--theme--violet'} onClick={onClick}>Done</Buttons>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ticket