import React, { useState } from 'react'
import '../../styles/TicketOptions.css'
import { useLocation, useNavigate } from 'react-router-dom';
import Buttons from '../../components/Shared/ui/Buttons';
import AlertBox from '../../components/Shared/ui/AlertBox';

function TicketOptions() {

    const navigate = useNavigate();
    const location = useLocation();
    const match = location.state?.match
    const selectedSeats = location.state?.selectedSeats
    const selectedBlock = location.state?.selectedBlock
    const price = location.state?.price
    const event = location.state?.event
    const seatCount = location.state?.seatCount
    const seatings = location.state?.seatings

    const bookingFee = 34.99;
    const [pincode, setPincode] = useState('');
    const [warning, setWarning] = useState('');
    const [warningColor, setWarningColor] = useState('red');
    const [infoVisible, setInfoVisible] = useState('');
    const [showAlert, setShowAlert] = useState(false);


    const unavailablePincodes = ['603204', '604022', '603203', '603201', '603202'];
    const availablePincodes = ['600001', '600002', '600003', '600004', '600005'];

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = new Date();

    const currentMonth = months[month.getMonth()];

    const handleWarning = () => {

        if (pincode.length > 6 || pincode.length < 6) {
            setWarning('Please enter a valid pincode');
            setWarningColor('red');
        } else if (unavailablePincodes.includes(pincode)) {
            setWarning('Home delivery unavailable for your pincode. Pickup has been enabled.');
            setWarningColor('red');
            setInfoVisible('pickup')
        }
        else if (availablePincodes.includes(pincode)) {
            setWarning('Home delivery available for your pincode. Please proceed to checkout');
            setWarningColor('green');
        }
        else {
            setWarning('Pincode not found');
            setWarningColor('red');
        }

    }
    const handleBack = () => {
        navigate(-1);
    }

    const handlePayment = (e) => {
        e.preventDefault();

        if (availablePincodes.includes(pincode)) {
            navigate('/payment', {
                state: {
                    match: match,
                    selectedSeat: selectedSeats,
                    price: price,
                    bookingFee: bookingFee,
                    selectedBlock: selectedBlock,
                    selectedMethod: 'Home Delivery',
                    event: event,
                    seatCount: seatCount,
                    totalEventAmount: totalAmount,
                    total: parseFloat(calculateTotalAmount()),
                    eventTaxAmount: parseFloat(calculateTaxAmount()),
                    subTotal: price * seatCount,
                    seatings: seatings
                }
            })
        } else if (infoVisible === 'pickup') {
            navigate('/payment', {
                state: {
                    match: match,
                    selectedSeat: selectedSeats,
                    price: price,
                    bookingFee: bookingFee,
                    selectedBlock: selectedBlock,
                    selectedMethod: 'Pickup from Box Office',
                    event: event,
                    seatCount: seatCount,
                    totalEventAmount: totalAmount,
                    total: parseFloat(calculateTotalAmount()),
                    eventTaxAmount: parseFloat(calculateTaxAmount()),
                    subTotal: price * seatCount,
                    seatings: seatings
                }
            })
        } else {
            e.preventDefault();
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        }
    };


    const getTaxPercentage = (price) => {
        if (price <= 500) return 11.776;
        if (price <= 1000) return 9.44;
        if (price <= 2000) return 7.08;
        if (price <= 6000) return 4.72;
        return 3.54;
    };


    const calculateTaxAmount = () => {
        const ticketPrice = parseFloat(price) || 0;
        const count = seatCount || selectedSeats?.length || 0;
        const subTotal = ticketPrice * count;
        const taxPercent = getTaxPercentage(ticketPrice);
        const taxAmount = (subTotal * taxPercent) / 100;
        return taxAmount.toFixed(2);
    };

    const calculateTotalAmount = () => {
        const taxAmount = parseFloat(calculateTaxAmount());
        const subTotal = price * (seatCount || selectedSeats?.length);
        return (subTotal + taxAmount + (bookingFee * (seatCount || selectedSeats?.length))).toFixed(2);
    };



    const total = () => {
        const subTotal = price * selectedSeats?.length;
        return subTotal;
    }

    const totalAmount = price + (seatCount * 5.9)



    return (
        <div>

            <div className="ticket-header">
                <i class="fa fa-chevron-left fa-lg" onClick={handleBack}></i>
                <h2>Ticket Options</h2>
            </div>

            <div className="ticket-options-container">
                <div className="ticket-options">
                    <p>Please select from the following options</p>
                    <div className="select-options">
                        <div className="option">
                            <input type="radio"
                                name='delivery'
                                value={'home'}
                                checked={infoVisible === 'home'}
                                onChange={() => setInfoVisible('home')} />
                            <p>Home Delivery</p>
                        </div>
                        <div className="pincode">
                            <input type="number" name='pincode' onChange={(e) => setPincode(e.target.value)} />
                            <button onClick={handleWarning}>Check Availability</button>
                        </div>
                        <br />
                        <p style={{ color: warningColor }}>{warning}</p>

                        {infoVisible === 'home' &&
                            <div className="option-pickup">
                                <p>Home Delivery Information</p>
                                <ul>
                                    <li>Delivery Fee will be applicable.</li>
                                    <li>You will be informed once the delivery is initiated and will receive the physical ticket.</li>
                                    <li>You will receive your phyical ticket between 5-7 working days from the date of order.</li>
                                </ul>
                            </div>
                        }

                    </div>


                    <div className="select-options">
                        <div className="option">
                            <input type="radio"
                                name='delivery'
                                value={'pickup'}
                                checked={infoVisible === 'pickup'}
                                onChange={() => setInfoVisible('pickup')} />
                            <p>Pickup from Box Office</p>
                        </div>

                        {infoVisible === 'pickup' &&
                            <div className="option-pickup">
                                <p>Pickup Information</p>
                                <ul>
                                    <li>You will receive details about the pickup time and location via email and SMS.</li>
                                    <li>Carry the e-ticket and your ID proof to get your physical ticket.</li>
                                    <li>You may be required to share an OTP visible under the Ticket details on your Profile.</li>
                                </ul>
                            </div>
                        }
                    </div>

                    <div className='ticket-information'>
                        <h5>Note : </h5>
                        <p>Please note that physical tickets are mandatory to enter the stadium. You can collect your physical ticket from the designated ticket counter at the venue on the day before the event. The ticket counter will be closed on the day of the event.</p>
                    </div>
                </div>

                <div className="ticket-confirmation">
                    <p>Order Summary</p>
                    <div className='optional-outlines'>
                        <h5>{`${event ? event.artist : match?.team1 + 'vs' + match?.team2}`}</h5>
                        <div>
                            <p>{`${seatCount ? seatCount : selectedSeats?.length}`} Ticket(s)</p>
                            <p>₹{price}</p>
                        </div>
                        <span className='hr-line' style={{ width: '100%', height: '1px', backgroundColor: '#bcbcbc20' }} />
                        <p>{`${ match ? match?.date + ' ' + currentMonth + ' ' + match?.time : event.date}`}</p>

                        {match ? <p>{match?.venue + ', ' + match?.location}</p>
                        : <p>{event.place + ', ' + event.address}</p>}
                        

                        {match ?
                            <>
                                <span className='hr-line' style={{ width: '100%', height: '1px', backgroundColor: '#bcbcbc20' }} />
                                <h5>{selectedBlock}</h5>
                                <h5>{selectedSeats?.join(', ') + ' - ' + selectedSeats?.length + ' Ticket(s)'}</h5>
                            </>
                            :
                            <>
                                <span className='hr-line' style={{ width: '100%', height: '1px', backgroundColor: '#bcbcbc20' }} />
                                <h5>{seatings}</h5>
                                <h5>{seatCount + ' Ticket(s)'}</h5>
                            </>}

                    </div>

                    <div className='optional-outlines' style={{ border: 'none' }}>
                        <div>
                            <p>Sub-total</p>
                            <p>₹{`${event ? price * seatCount : total()}`}</p>
                        </div>
                        <div>
                            <p>Booking Fee</p>
                            <p>₹{bookingFee}</p>
                        </div>
                        <div>
                            <p>Tax</p>
                            <p>₹{calculateTaxAmount()}</p>
                        </div>
                        <span className='hr-line' style={{ width: '100%', height: '1px', backgroundColor: '#bcbcbc20' }} />
                        <div>
                            <h5>Total Amount</h5>
                            <h5>₹{calculateTotalAmount()}</h5>
                        </div>
                        <span className='hr-line' style={{ width: '100%', height: '1px', backgroundColor: '#bcbcbc20' }} />
                        <p>Select State</p>
                        <select name="state" id="state">
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                        </select>
                        <br /><br /><br /><br />
                        <div>
                            <i class="fa fa-info-circle" style={{ color: "#bcbcbc70", marginBottom: '18px' }}></i>
                            <p>By proceeding, I express my consent to complete this transaction.</p>
                        </div>

                        <Buttons buttonSize={'btns--medium'} buttonStyle={'btns--theme--violet'} onClick={handlePayment} type={'button'}>Procced to Pay</Buttons>

                    </div>


                </div>

            </div>
            {showAlert && (<AlertBox message={'Please Select a Ticket Delivery Option'} onOk={() => { setShowAlert(false) }} />)}
        </div>
    )
}

export default TicketOptions