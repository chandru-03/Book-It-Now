import React, { useEffect, useState } from 'react';
import '../../styles/Payment.css';
import UpiPayment from './UpiPayment';
import CardPayment from './CardPayment';
import NetBankingPayment from './NetBankingPayment';
import WalletPayment from './WalletPayment';
import VoucherPayment from './VoucherPayment';
import OrderSummary from './OrderSummary';
import { useLocation } from 'react-router-dom';
import AlertBox from '../../components/Shared/ui/AlertBox';

function Payment() {
    const location = useLocation();
    const language = location.state.language;

    const paymentMethod = ['QuickPay','Pay by UPI App', 'Debit/Credit Card', 'Net Banking', 'Mobile Wallets', 'Gift Voucher'];
    const lowLimitMethods = ['QuickPay', 'Pay by UPI App', 'Mobile Wallets', 'Gift Voucher'];

    const [activePayment, setActivePayment] = useState('Pay by UPI App');
    const [totalAmount, setTotalAmount] = useState(0);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (totalAmount > 100000 && lowLimitMethods.includes(activePayment)) {
            setShowAlert(true);
            setActivePayment('Debit/Credit Card');
        }
    }, [totalAmount]);


    return (
        <div>
            <div className='container payment-container'>
                <div className="payment-method-container">
                    <div className="payment-header">
                        <h4>Payment Options</h4>
                    </div>
                    <div className="payment-methods">
                        <div className='payment-sidebar'>
                            {paymentMethod?.map((method,index) => (
                                <div key={index}>
                                <h3 className={activePayment === method ? 'active' : ''}
                                    onClick={() => {
                                        if (lowLimitMethods.includes(method) && totalAmount > 100000) {
                                            setShowAlert(true);
                                        }
                                        else {
                                            setActivePayment(method);
                                        }
                                    }}>{method}</h3>
                                    </div>
                            ))}
                        </div>

                        <div className='payment-content'>
                            {activePayment === 'Pay by UPI App' && (<UpiPayment location={location} language={language}/>)}

                            {activePayment === 'Debit/Credit Card' && (<CardPayment location={location} language={language}/>)}

                            {activePayment === 'Net Banking' && (<NetBankingPayment location={location} language={language}/>)}

                            {activePayment === 'Mobile Wallets' && (<WalletPayment location={location} language={language}/>)}

                            {activePayment === 'Gift Voucher' && (<VoucherPayment location={location} language={language}/>)}
                        </div>

                    </div>
                </div>
                <div className='order-summary'>
                    <OrderSummary location={location} setTotalAmount={setTotalAmount} />
                </div>
            </div>
            {showAlert && (
                <AlertBox message={
                    <>
                        Payable Amount Is higher than ₹ 1,00,000. <br /> You can only make payment by Debit/Credit Card or Net Banking
                    </>
                } onCancel={() => setShowAlert(false)} onOk={() => {
                    if (activePayment !== 'Debit/Credit Card') {
                        setActivePayment('Debit/Credit Card');
                    }
                    setShowAlert(false);
                }} />
            )}
        </div>
    )
}

export default Payment