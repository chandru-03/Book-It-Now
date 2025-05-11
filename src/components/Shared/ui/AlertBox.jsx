import React from 'react'
import '../../../styles/AlertBox.css'
import Buttons from './Buttons'

function AlertBox({message,onCancel, onOk}) {
  return (
    <div>
        <div className='alert-container' style={{zIndex: '999999'}}>
            <div className='alert-box'>
                <h5>{message}</h5>
                <br /><br />
                <div style={{display:'flex',justifyContent:`${onCancel ? 'space-between' : 'center'}`,width:'100%',alignItems:'center',padding:'0 10rem'}}>
                <Buttons buttonSize={'btns--medium'} buttonStyle={'btns--theme--violet'} onClick={onOk}  type={'button'}>
                    Ok
                </Buttons>
                {onCancel && (
                    <Buttons buttonSize={'btns--medium'} buttonStyle={'btns--theme--violet'} onClick={onCancel}  type={'button'}>
                        Cancel
                    </Buttons>
                )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AlertBox