import React, { useEffect, useState } from 'react'
import '../../styles/Payment.css'
import CountDown from '../../components/Shared/ui/CountDown'
import QRCode from 'qrcode'

function ScannerPayment({closePopup}) {
    const [qrCode, setQrCode] = useState('');

    useEffect(() => {
        const payId = Math.floor(10000 + Math.random() * 1000000) + '/' + Math.floor(1000000 + Math.random() * 100000000);

        QRCode.toDataURL(payId).then(setQrCode).catch(console.error);
    }, []);
  return (
    <div>
        <div className="scanner-payment-container">
            <div className="scanner-payment-body">
                <div className="scanner-payment-header">
                    <h3>Payment</h3>
                <i class="fa-solid fa-xmark fa-xl" onClick={closePopup} style={{color:'black'}}></i>
                </div>
                <p>Scan the QR Code from one of the below-mentioned supported UPI apps. Pay before timer runs out.</p>

                <CountDown closePopup={closePopup} countdownTime={5} countdown={"05:00"}/>

                <div className="scanner-payment-qr-code">
                    <img src={qrCode}/>
                </div>

                <div className="scanner-methods">
                    <img src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-128.png" alt="" />
                    <img src="https://cdn1.iconfinder.com/data/icons/social-media-2668/32/Social_social_pay_pal_paypal_payments_platform-512.png" alt="" />
                    <img src="https://cdn2.iconfinder.com/data/icons/social-icons-color/512/paytm-128.png" alt="" />
                    <img src="https://cdn4.iconfinder.com/data/icons/payment-methods-8/87/amazon_5-512.png" alt="" />
                </div>


            </div>
        </div>
    </div>
  )
}

export default ScannerPayment