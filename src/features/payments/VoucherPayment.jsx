import React, { useState } from 'react'
import Buttons from '../../components/Shared/ui/Buttons'
import '../../styles/Payment.css'
import { useNavigate } from 'react-router-dom';
import InputText from '../../components/Shared/ui/InputText';
import AlertBox from '../../components/Shared/ui/AlertBox';

function VoucherPayment({location,language}) {
    const navigate = useNavigate();
    const [voucherCode, setVoucherCode] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const regex =(code) => {
        const pattern = /^[A-Z]{16}$/;
        return pattern.test(code);
    }

    const validateVoucherCode = () => {
        if(regex(voucherCode)) {
            setShowAlert(false);
            navigate('/finalpayment', {state: {payment:'Voucher Payment',voucherCode:voucherCode,language:language,item:location}});
        } else {
            setShowAlert(true);
        }
    }
    return (
        <div>
            <div className='voucher-payment'>
                <label htmlFor="">
                    <InputText 
                    value={voucherCode}
                    maxLength={16} 
                    onChange={(e) => setVoucherCode(e.target.value)} 
                    placeholder='Enter Your Gift Voucher Number' />
                </label>
                <p>{voucherCode.length}/16</p>
            </div>
            <Buttons buttonSize={'btns--large'} buttonStyle={'btns--theme--violet'} type={'button'} onClick={validateVoucherCode}>
                Make Payment
            </Buttons>
            {showAlert && <AlertBox message={'Invalid Voucher Code'} onOk={() => setShowAlert(false)} onCancel={() => setShowAlert(false)}/>}
        </div>
    )
}

export default VoucherPayment