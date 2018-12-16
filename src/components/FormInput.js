/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import FormMessage from './FormMessage';

const FormInput = ({onChange, type, placeholder, value, name, content}) => {
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
           <FormMessage content={content} type="error"/>

    </div>
    )
}

FormInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    content: PropTypes.string
}

FormInput.defaultProps = {
    content: null
}

export default FormInput