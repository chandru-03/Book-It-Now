import React, { useState } from 'react'
import '../../styles/Payment.css'
import NetBankingPaymentLists from '../../components/Shared/list/NetBankingPaymentLists'
import Buttons from '../../components/Shared/ui/Buttons'
import { useLocation, useNavigate } from 'react-router-dom';

function NetBankingPayment({location,language}) {
    const navigate = useNavigate();
    const [banking, setBanking] = useState('');
    const [bankingImage, setBankingImage] = useState(null);
    return (
        <div>
            <div className='upi-grid'>
                {NetBankingPaymentLists.map((bank, index) => (
                    <div key={index} className='upi-option'>
                        <label>
                            <input
                                type="radio"
                                className='upi-input'
                                name='bank' 
                                onChange={()=>{setBanking(bank.type);setBankingImage(bank.logo)}}/>
                            <img src={bank.logo} alt="" className='upi-logo' />&nbsp;
                            <span className="upi-label">{bank.type}</span>
                        </label>
                    </div>
                ))}
            </div>
            <Buttons buttonSize={'btns--large'} buttonStyle={'btns--theme--violet'} type={'button'} onClick={() => navigate('/finalpayment', { state: { payment: 'Net Banking Payment', item: location,banking: banking,bankingImage: bankingImage,language: language } })}>
                Make Payment
            </Buttons>
        </div>
    )
}

export default NetBankingPayment