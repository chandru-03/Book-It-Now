import React, { useState } from 'react'
import Buttons from './Buttons'
import '../../../styles/Buttons.css';

function AddButton({ count, setCount,style,startFromZero = false }) {


    const handleAdd = () => {
        setCount(startFromZero ? 1 : 2);
    };

    const handlePlus = () => {
        setCount(count + 1);
    };
    const handleMinus = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const isIntialAdd = startFromZero ? count === 0 : count === 1;
    return (
        <div style={style}>
            {isIntialAdd ? (
                <Buttons buttonSize={'btns--medium'} buttonStyle={'btns--outline--bg'} type={'button'} onClick={handleAdd}>
                    &nbsp;&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;&nbsp;&nbsp;
                </Buttons>
            ) : (
                <div className='btns--AddToCart'>
                    <Buttons buttonSize={'btns--medium'} buttonStyle={'btns--theme--violet'} type={'button'}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span className="material-symbols-outlined" onClick={handleMinus} style={{ cursor: 'pointer', fontSize: '24px' }}>
                                remove
                            </span>
                            <span>{count}</span>
                            <span className="material-symbols-outlined" onClick={handlePlus} style={{ cursor: 'pointer', fontSize: '24px' }}>
                                add
                            </span>
                        </div>
                    </Buttons>

                </div>

            )}

        </div>
    )
}

export default AddButton