import React, { useState } from 'react';
import Buttons from '../../components/Shared/ui/Buttons';
import '../../styles/Payment.css';
import { useLocation, useNavigate } from 'react-router-dom';
import InputText from '../../components/Shared/ui/InputText';
import InputMonth from '../../components/Shared/ui/InputMonth';
import InputPassword from '../../components/Shared/ui/InputPassword';
import AlertBox from '../../components/Shared/ui/AlertBox';

function CardPayment({location,language}) {

    const navigate = useNavigate();
    
    const [visible, setVisible] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [name, setName] = useState('');

    const formattedCardNumber = (value) => {
        const cleanCardNumber = value.replace(/\D+/g, '');
        const formatted = cleanCardNumber.match(/.{1,4}/g)?.join(' ') ?? '';
        return formatted;
    };

    const handleChange = (e) => {
        const formatted = formattedCardNumber(e.target.value);
        setCardNumber(formatted);
    };

    const handlePayment = () => {
        if (cardNumber.length === 0 || name.length === 0) {
            setVisible(true);
        }
        else {
            navigate('/finalpayment', {
                state: {
                    payment: 'Card Payment',
                    cardName: name,
                    cardNumber: cardNumber,
                    item: location,
                    language: language,
                }
            })
        }
    }

    return (
        <div>
            <div className="card-payment-container">
                <div className="card-payment">
                    <InputText placeholder={"Enter Your Card Number"} name={"cardNumber"} value={cardNumber} onChange={handleChange} maxLength={19} />
                    <InputText placeholder={"Enter Your Name On Card"} name={"name"} value={name} onChange={(e) => setName(e.target.value)}/>
                    <div className="card-payment-info">
                        <InputMonth placeholder={"Enter Expiry Date"} name={"expiryDate"} />
                        <InputPassword placeholder={"CVV"} name={"cvv"} maxLength={3} style={{ width: '150px' }}/>
                    </div>
                </div>
            </div>
            <Buttons
                buttonSize={'btns--large'}
                buttonStyle={'btns--theme--violet'}
                type={'button'}
                onClick={handlePayment}>
                Make Payment
            </Buttons>
            {visible && (
                <AlertBox message={'Please fill all the fields'} onOk={() => setVisible(false)} />
            )}
        </div>
    );
}

export default CardPayment;
