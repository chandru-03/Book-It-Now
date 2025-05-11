import React, { useState } from 'react'
import '../../../styles/Ui.css'

function InputPassword({ value, onChange, placeholder, name, style, maxLength, readOnly,iconStyle }) {
    const [showPassword, setShowPassword] = useState(false);
    const handleVisibility = () => {
        setShowPassword(!showPassword);
    }
    return (
        <div>
            <div className='input-text'>
                <input type={showPassword ? "text" : "password"}
                    readOnly={readOnly}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    style={style}
                    maxLength={maxLength} />
                <span class="material-symbols-outlined icon-eye" style={iconStyle} onClick={handleVisibility}>
                    {showPassword ? 'visibility_off' : 'visibility'}
                </span>
            </div>
        </div>
    )
}

export default InputPassword