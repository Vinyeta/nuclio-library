import React from 'react';
import PropTypes from 'prop-types';
import EyeOff from '../assets/eye-off.svg'
import './input.css';

export const Input = ({ type, placeholder, name, size }) => {
    const [inputType, setInputType] = React.useState(type);
    const [passwordShown, setPasswordShown] = React.useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const toggleType = () => {
        setInputType(passwordShown ? 'text' : 'password')
    }
    return (
        <div className={`container--${size}`}>
            <input type={inputType}
                placeholder={placeholder}
                name={name}
                className={['input', `input--${size}`].join(' ')} />
            {type === 'password' &&
                <img className="eyeOff"
                    src={EyeOff}
                    alt="eye off"
                    onClick={() => {
                        togglePasswordVisiblity();
                        toggleType();
                    }} />
            }
        </div>

    )
}

Input.PropTypes = {
    /**
     Input type atribute
     */ 
    type: PropTypes.oneOf(['email','number', 'text', 'password']),
    /**
     Input palceholder atribute
     */
    placeholder: PropTypes.string,
    /**
     * Input name atribute
     */
    name: PropTypes.string,
    /**
     * Input size
     */
    size: PropTypes.oneOf(['medium', 'large'])
}

Input.defaultProps = {
    type: 'text',
    size: 'medium'
}