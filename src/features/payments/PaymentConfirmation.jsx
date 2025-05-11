import React, { useEffect, useState } from 'react'
import '../../styles/PaymentConfirmation.css'
import AlertBox from '../../components/Shared/ui/AlertBox';
import { useLocation, useNavigate } from 'react-router-dom';
import CountDown from '../../components/Shared/ui/CountDown';
import ProgressBar from '../../components/Shared/ui/ProgressBar';
import Buttons from '../../components/Shared/ui/Buttons';
import InputText from '../../components/Shared/ui/InputText';
import InputPassword from '../../components/Shared/ui/InputPassword';

function PaymentConfirmation() {
    const location = useLocation();

    const paymentMethod = location.state?.payment
    const cardName = location.state?.cardName
    const cardNumber = location.state?.cardNumber
    const wallet = location.state?.wallet
    const walletImg = location.state?.bankingImage
    const banking = location.state?.wallet
    const bankingImg = location.state?.bankingImage
    const voucher = location.state?.voucherCode
    const item = location.state?.item
    const selectedSeats = location.state?.selectedSeats
    const language = location.state?.language

    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
    const [verify, setVerify] = useState(false)
    const [message, setMessage] = useState('')
    const [showAlert, setShowAlert] = useState(false);
    const [oK, setOk] = useState('');

    const navigate = useNavigate()

    const [showProgress, setShowProgress] = useState(false);
    const [otp, setOtp] = useState('');
    const [generatedOTP, setGeneratedOTP] = useState('');
    const [warning, setWarning] = useState('');
    const [warningColor, setWarningColor] = useState('red');

    const date = new Date();
    const currentDate = date.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    });


    useEffect(() => {

        const otp = Math.floor(100000 + Math.random() * 900000);
        setGeneratedOTP(otp);

        if (paymentMethod === 'Card Payment') {
            alert('OTP : ' + generatedOTP);

        } else if (paymentMethod === 'Upi Payment') {
            setTimeout(() => {
                setShowProgress(true);
            }, 10000);
        }
    }, []);

    const sendOtp = () => {
        alert('OTP : ' + generatedOTP);
    }

    const handleBack = () => {
        setShowAlert(true);
    }

    const handleOTP = () => {
        if (parseInt(otp) === generatedOTP) {
            setWarning('Payment Successful!');
            setWarningColor('green');
            setShowProgress(true);
        } else {
            setWarning('Invalid OTP!');
            setWarningColor('red');
        }
    }

    const handleVerify = () => {
        if (parseInt(number.length) < 10) {
            setShowAlert(true);
            setVerify(false);
            setMessage('Please enter a valid mobile number.');
        } else {
            setVerify(true);
            sendOtp();
        }
    }

    const handleNetBanking = () => {
        if (parseInt(number.length) < 6 || parseInt(number.length) < 8) {
            setShowAlert(true);
            setVerify(false);
            setMessage('Please enter a valid Login ID or Password.');
        } else {
            setVerify(true);
            setInterval(() => {
                setShowProgress(true);
            }, 20000);
        }
    }

    const handlePay = () => {
        setShowProgress(true);
    }

    useEffect(() => {
        if (verify === true) {
            const timer = setTimeout(() => {
                setMessage(`Payment Success You'll be shortly redirected.`);
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, [verify]);



    return (
        <div>
            <div className="processing-header">
                <i className="fa fa-chevron-left fa-2xs" onClick={handleBack}></i>
                <h2>Proccessing Your Payment</h2>
            </div>

            {paymentMethod === 'Upi Payment' && (
                <div className='processing-container'>
                    <div className="processing-content">
                        <p>Payment request has been sent to Your Upi app. Approve before it times out! Please do not close this window, as it will impact your booking.</p>
                        <span className='hr-line' style={{ width: "100%", height: "1px", backgroundColor: "#d3d3d320" }} />
                        <p>Time Remaining : {<CountDown countdownTime={3} />} </p>
                        <span className='hr-line' style={{ width: "100%", height: "1px", backgroundColor: "#d3d3d320" }} />
                        <div>
                            <span class="material-symbols-outlined">upi_pay</span>
                            <p>Open the Upi you choose to pay from</p>
                        </div>
                        <i className="fa fa-arrow-down fa-2xs" aria-hidden="true"></i>
                        <div>
                            <span className="material-symbols-outlined">request_page</span>
                            <p>Open the Payment request from BookItNow</p>
                        </div>
                        <i class="fa fa-arrow-down fa-2xs" aria-hidden="true"></i>
                        <div>
                            <span className="material-symbols-outlined">
                                currency_rupee_circle
                            </span>
                            <p>Pay and come back to complete your booking</p>
                        </div>
                        <span className='hr-line' style={{ width: "100%", height: "1px", backgroundColor: "#d3d3d320" }} />
                        <p>In case if this page doesn't refresh automatically, please check your booking status in Your Orders under your profile </p>
                    </div>
                </div>
            )}

            {paymentMethod === 'Card Payment' && (
                <div className='processing-container'>
                    <div className="processing-content">
                        <h5>Second Factor Authentication</h5>
                        <p>The One Time Password(OTP) has been sent. Please enter the OTP below to complete the payment.</p>
                        <span className='hr-line' style={{ width: "100%", height: "1px", backgroundColor: "#d3d3d320" }} />
                        <p>Mobile Number : 9514442827</p>
                        <p>Date : {currentDate}</p>
                        <p>Card Number : {cardNumber}</p>
                        <div>
                            <p style={{ marginTop: "20px",marginLeft:'50px' }}>OTP : </p>
                            <InputPassword value={otp} onChange={(e) => setOtp(e.target.value)} placeholder={'Enter OTP'} name={'otp'} maxLength={6} />
                        </div>
                        <div>
                            <Buttons buttonSize={'btns--medium'} buttonStyle={'btns--theme--violet'} type={'button'} onClick={handleOTP}>Sumbit</Buttons>
                            <Buttons buttonSize={'btns--medium'} buttonStyle={'btns--theme--red'} type={'button'} onClick={handleBack}>Cancel</Buttons>
                        </div>
                        <p style={{ color: "#8f00ff", cursor: "pointer", textDecoration: "underline" }} onClick={sendOtp}>Resend</p>
                        <p style={{ color: warningColor }}>{warning}</p>

                    </div>

                </div>
            )}

            {paymentMethod === 'Wallet Payment' && (
                <div className="processing-container">
                    <div className="processing-content">
                        <img src={walletImg} alt={wallet} />
                        <span className='hr-line' style={{ width: "100%", height: "1px", backgroundColor: "#d3d3d320" }} />
                        <p>Mobile Number : 9514442827</p>
                        <p>Date : {currentDate}</p>
                        <p>Please Login to Your {wallet} wallet.</p>
                        <div>
                            {!verify ? <div><InputText placeholder={'0 0 0 0 0 0 0 0 0 0'} style={{ margin: '0%' }} onChange={(e) => setNumber(e.target.value)} />
                                <Buttons buttonSize={'btns--medium'} buttonStyle={'btns--theme--violet'} type={'button'} onClick={handleVerify}>Verify</Buttons> </div>
                                : <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '20px' }}>
                                        <p style={{ padding: "20px", marginTop: '15px' }}>OTP :</p>
                                        <InputText onChange={(e) => setOtp(e.target.value)} />
                                    </div>
                                    <p style={{ color: "#8f00ff", cursor: "pointer", textDecoration: "underline" }} onClick={sendOtp}>Resend</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '20px' }}>
                                        <Buttons buttonSize={'btns--medium'} buttonStyle={'btns--theme--violet'} type={'button'} onClick={handleOTP}>Sumbit</Buttons>
                                        <Buttons buttonSize={'btns--medium'} buttonStyle={'btns--theme--red'} type={'button'} onClick={handleBack}>Cancel</Buttons>
                                    </div>
                                </div>}

                        </div>
                    </div>
                </div>
            )}

            {paymentMethod === 'Net Banking Payment' && (
                <div className="processing-container">
                    {!verify ? <div className="processing-content">
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%', padding: '10px' }}>
                            <p>Login for individual</p>
                        </div>
                        <div>
                            <p style={{ marginTop: '15px' }}>Login ID</p>
                            <InputText style={{ margin: '0%' }} onChange={(e) => setNumber(e.target.value)} />
                        </div>
                        <div>
                            <p style={{ marginTop: '15px' }}>Password</p>
                            <InputText style={{ margin: '0%' }} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div style={{ zIndex: '1' }}>
                            <Buttons buttonSize={'btns--medium'} buttonStyle={'btns--theme--violet'} type={'button'} onClick={handleNetBanking}>Login</Buttons>
                            <Buttons buttonSize={'btns--medium'} buttonStyle={'btns--theme--red'} type={'button'} onClick={handleBack}>Reset</Buttons>
                        </div>
                    </div>
                        : <div className="processing-content">
                            <p>You will get an link via sms message. Click the link and pay then open this page</p>
                            <CountDown countdownTime={5} />
                            <p style={{ color: 'green' }}>{message}</p>
                        </div>}
                    <div>
                    </div>
                </div>
            )}

            {paymentMethod === 'Voucher Payment' && (
                <div className='processing-container'>
                    <div className="processing-content">
                            <InputText 
                            style={{ margin: '0%' }}
                            readOnly={true}
                            value={voucher}/>
                            <InputText 
                            style={{ margin: '0%' }}
                            placeholder={'Enter Your Gift Voucher Pin'}/>
                            <Buttons buttonSize={'btns--medium'} buttonStyle={'btns--theme--violet'} type={'button'} style={{zIndex:'1'}} onClick={handlePay}>Pay</Buttons>
                    </div>

                </div>
            )}
            {showAlert && (<AlertBox message={message ? message : "Are you sure you want to cancel the payment?"} onOk={() => { message ? setOk(false) : navigate('/') }} onCancel={() => setShowAlert(false)} />)}
            {showProgress && (<ProgressBar message={'Confirming your ticket...'} navigateTo={() => navigate('/', { state: { item: item, language:language } })} />)}
        </div>
    )
}

export default PaymentConfirmation