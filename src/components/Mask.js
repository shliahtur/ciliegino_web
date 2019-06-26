import React from 'react';
import MaskedInput from 'react-maskedinput'
import classNames from 'classnames';
import '../styles/Input.css';

const Input = ({
   value, mask, size, placeholder, onChange, id, className, width, label, error
}) => {
  const classes = classNames(
    'input',
    className,
    { error },
  );
  
  return (
    <div className="inputWrapper">
      <div className="labelsWrapper">
        {label
          && <label className="inputLabel" htmlFor={id}>{label}</label>
        }

      </div>
            <MaskedInput 
            mask={mask}
            name={id} 
            size={size}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            style={{width: `${width}px`}}
            className={classes}
            />
      {error
        && <span className="inputError">{error}</span>
      }
    </div>
  );
};


export default Input;