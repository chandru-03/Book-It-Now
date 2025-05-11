import React, { useState } from 'react'
import upiPaymentLists from '../../components/Shared/list/UpiPaymentList'
import '../../styles/Payment.css'
import Buttons from '../../components/Shared/ui/Buttons'
import ScannerPayment from './ScannerPayment'
import AlertBox from '../../components/Shared/ui/AlertBox'
import { useLocation, useNavigate } from 'react-router-dom'
import InputText from '../../components/Shared/ui/InputText'

function UpiPayment({location,language}) {


    const navigate = useNavigate();
    
    const [selectUpi, setSelectedUpi] = useState('');
    const [showScanner, setShowScanner] = useState(false);
    const [upiId, setUpiId] = useState('');
    const [alertBox, setAlertBox] = useState(false);
    const [visible, setVisible] = useState(true);



    const validateUpi = (upiId) => {
        const pattern = /^[a-zA-Z0-9][a-zA-Z0-9._]{1,64}@[a-z]{4,10}$/;
        return pattern.test(upiId);
    }
    const handleUpiChange = () => {
        if (validateUpi(upiId)) {
            setAlertBox(false);
            navigate('/finalpayment', { state: { payment: 'Upi Payment',item: location, language: language} });
        }
        else {
            setAlertBox(true);
        }
    }
    

    return (
        <div>
            <div className='upi-grid'>
                {upiPaymentLists.map((upi, index) => (
                    <div key={index} className='upi-option'>
                        {visible &&
                            <label>
                                <input
                                    className='upi-input'
                                    type="radio"
                                    name="upiPayment"
                                    value={upi.type}
                                    style={{cursor: 'pointer'}}
                                    checked={selectUpi === upi.type}
                                    onChange={() => { setSelectedUpi(upi.type); setVisible(false) }}
                                />
                                <img src={upi.logo} alt={upi.type} className="upi-logo" />
                                <span className="upi-label">{upi.type}</span>
                            </label>
                        }
                        <div>
                            <br />
                            {selectUpi === upi.type &&
                                <div className="upi-pay">
                                    <div className='upi-pay-header'>
                                        <i className="fa fa-close fa-lg" onClick={() => { setSelectedUpi(''); setVisible(true); }}></i>
                                        <h5>{selectUpi}</h5>
                                    </div>

                                    <p>To proceed, please enter the mobile number linked to your {upi.type} account</p>

                                    <InputText
                                    name={'UpiId'}
                                    placeholder={'e.g joel@oksbi'}
                                    onChange={(e) => setUpiId(e.target.value)}    
                                    />
                                    
                                    <p>You'll receive the collect request from us, in {upi.type} app</p>
                                    <br />
                                    <div>
                                        <input type="checkbox" name="" id="" />
                                        <div>
                                            <span>QuickPay</span>
                                            <p>Save this upi option to my account and make faster payments.</p>
                                        </div>
                                    </div>


                                    <Buttons buttonSize={'btns--large'} buttonStyle={'btns--theme--violet'} onClick={handleUpiChange}>
                                        Make Payment
                                    </Buttons>

                                    <br /><br />
                                    <p>By clicking "Make Payment" you agree to the terms and conditions</p>
                                </div>
                            }
                        </div>
                    </div>
                ))}
            </div>
            {visible && (
                <div className='scanner-pay'>
                    <h4>Or else pay with a Scanner</h4>
                    <div className='scanner-pay-button' onClick={() => setShowScanner(true)}>
                        <img src="https://cdn2.iconfinder.com/data/icons/sale-and-discount/32/Sale_and_Discount-05-512.png" alt="" />
                        <p>Click to Pay</p>
                    </div>

                </div>
            )}


            {showScanner && (
                <ScannerPayment closePopup={() => setShowScanner(false)}/>
            )}

            {alertBox && (
                <AlertBox message={"Invalid Upi Id"} onClose={() => setAlertBox(false)} />
            )}

        </div>

    )
}

export default UpiPayment