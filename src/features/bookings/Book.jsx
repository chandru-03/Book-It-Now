import React, { useContext } from 'react'
import '../../styles/book.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Buttons from '../../components/Shared/ui/Buttons';

function Book({}) {

    const location = useLocation();
    const movie = location.state?.movie;
    const selectedTime = location.state?.selectTime;
    const seatId = location.state?.selectedSeats;
    const cinema = location.state?.cinema;
    const date = location.state?.selectedDate;
    const total = location.state?.totalAmount;
    const language = location.state?.language;
    

    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    const tax = 35.40

    const handleCinemaCancel = () => {
        if (cinema?.type.includes('Non-Cancellable')) {
            return <p><i class="fa-solid fa-rectangle-xmark" style={{ color: "#ff3d3d" }}></i> This theatre doesn't allow cancellation</p>
        }
        else {
            return <p><i class="fa-solid fa-ticket" style={{ color: "#B197FC" }}></i> Up to 75% refundable on ticket cancellation</p>
        }
    }

    const handleTotal = () => {
        const subTotal = total + (tax * seatId.length);
        const roundOff = Math.floor(subTotal * 100)/100;
        return <span> ₹{roundOff} .with taxes</span>
    }

    return (
        <div>
            <div className="book">
                <div className="close-booking">
                    <i class="fa fa-arrow-left" aria-hidden="true" style={{ color: '#d3d3d3' }}></i>
                    <h4>Review Your Booking</h4>
                </div>
                <div className="container movie-info-body">
                    <img src={movie?.img} alt="" />
                    <div className="movie-info-text">
                        <h1>{movie?.title}</h1>
                        <div className="movie-info-sub-text">
                            <p>{movie?.movieRating}</p>
                            <span className='vr-line' />
                            <p>{movie?.genre}</p>
                            <span className='vr-line' />
                            <p>{movie?.format}+</p>
                        </div>
                        <div className="movie-info-sub-text">
                            <p>{cinema?.name}</p>
                            <p>{cinema?.location}</p>
                        </div>
                        <p>{language}</p>

                    </div>

                </div>

                <div className="ticket-info">
                    <div className="div-container">
                        <div className="div-1">{date?.day} , {date?.date} {date?.month} <span className='vr-line' /> {selectedTime}</div>
                        <div className="div-sub-container">
                            <div className="div-2">
                                <h4>{seatId?.length} Ticket(s)</h4>
                                <p>Executive- {seatId.join(', ')}</p></div>
                            <div className="div-3">₹ {total}</div>
                        </div>
                    </div>
                </div>

                <p>{handleCinemaCancel()}</p>

                <div className="total-container">
                    <h3>Payment Summary</h3>
                    <div className="total-info-container">
                        <div className='total-info-body'>
                            <p>Order Amount</p>
                            <span>₹ {total}</span>
                        </div>
                        <div className='total-info-body'>
                            <p>Taxes and Fees</p>
                            <span>₹ {tax}</span>
                        </div>
                        <span className='hr-line' style={{ width: '100%' }}/>
                        <div className='total-info-body'>
                            <p>To be Paid</p>
                            <span>{handleTotal()}</span>
                        </div>
                    </div>
                </div>

                <div className="customer-details-container">
                    <div className="customer-detail">
                        <h3>Your Details</h3>
                        <h4  onClick={() => navigate('/profile')}>Edit</h4>
                    </div>

                    <div className="customer-details">
                        <div className='customer-details-body'>
                        { user ? <img src={user?.image} alt="Profile" /> : <i class="fa-regular fa-user"></i>} 
                            <div className="customer-details-text">
                                <p>{user?.name}</p>
                                <p>+ 91-{user?.number}</p>
                                <p>{user?.email}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container terms-conditions">
                    <div className='terms-body'>
                        <i class="fa-regular fa-circle-question"></i>
                        <p>Terms and Conditions</p>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </div>

                <div className="make-payment">
                    <p>By clicking on Pay Now, you agree to our <span>Terms and Conditions</span></p>
                    <Buttons buttonSize={'btns--large'} buttonStyle={'btns--theme--violet'}>
                        <Link to="/payment" state={{ movie: movie, selectedTime: selectedTime, seatId: seatId, cinema: cinema, date: date, total: total, tax: tax,language: language }}>
                            Pay Now
                        </Link>
                    </Buttons>
                    <br /><br /><br />
                </div>
            </div>
        </div>
    )
}

export default Book