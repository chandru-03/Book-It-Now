import React from 'react'
import '../../../styles/Ui.css'

function InputMonth({value,onChange,placeholder,name,style,readOnly}) {
    return (
        <div className='input-text'>
            <input type="month"
                readOnly={readOnly}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                style={style}/>
        </div>
    )
}

export default InputMonth