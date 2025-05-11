import React, { useState } from 'react'
import WalletPaymentLists from '../../components/Shared/list/WalletPaymantLists'
import Buttons from '../../components/Shared/ui/Buttons'
import '../../styles/Payment.css'
import { useLocation, useNavigate } from 'react-router-dom';

function WalletPayment({location,language}) {
    const navigate = useNavigate(); 
    const [wallet, setWallet] = useState('');
    const [walletImage, setWalletImage] = useState(null);
    return (
        <div>
            <div className='upi-grid'>
            {WalletPaymentLists.map((item, index) => (
                <div key={index} className='upi-option'>
                    <label>
                        <input type="radio" 
                        className='upi-input'
                        name='wallet' 
                        onChange={()=>{setWallet(item.type);setWalletImage(item.logo)}}/>
                        <img src={item.logo} alt="" className='upi-logo'/>&nbsp;
                        <span className="upi-label">{item.type}</span>
                    </label>
                </div>
            ))}
            </div>
            <Buttons buttonSize={'btns--large'} buttonStyle={'btns--theme--violet'} type={'button'} onClick={()=>navigate('/finalpayment', {state: {payment:'Wallet Payment', item: location,wallet: wallet,walletImage: walletImage,language: language}})}>
                Make Payment
            </Buttons>
        </div>
    )
}

export default WalletPayment