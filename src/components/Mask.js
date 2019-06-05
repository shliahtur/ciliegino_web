import React from 'react';
import classNames from 'classnames';
import MaskedInput from 'react-maskedinput'
import '../styles/Input.css';

const Input = ({
   mask, size, placeholder, onChange, id, className, width, label, error, ...attrs
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
        {attrs.required
          && <span className="inputRequired">Required</span>
        }
      </div>
            <MaskedInput 
            mask={mask}
            id={id} 
            size={size}
            onChange={onChange}
            placeholder={placeholder}
            style={{width:  `${width}px`}}
            />
      {error
        && <span className="inputError">{error}</span>
      }
    </div>
  );
};


export default Input;