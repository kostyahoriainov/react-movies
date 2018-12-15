import React from 'react';

const FormInput = ({onChange, type, placeholder, value, name}) => {
   return (
    <div className="field">
        <label htmlFor={name}>{placeholder}</label>
        <input 
            id={name}
            placeholder={placeholder}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
        />
    </div>
    )
}

export default FormInput