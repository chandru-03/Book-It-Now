import React from 'react'
import '../../../styles/Ui.css'

function InputText({value,onChange,placeholder,name,style,maxLength,readOnly}) {
  return (
    <div className='input-text'>
        <input type="text"
        readOnly={readOnly} 
        value={value} 
        name={name}
        placeholder={placeholder} 
        onChange={onChange}
        style={style}
        maxLength={maxLength}
      required={true}/>
    </div>
  )
}

export default InputText