import React from 'react';
import classNames from 'classnames';
import ReactDatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "../styles/DatePicker.css";
import '../styles/Input.css';
import uk from "date-fns/locale/uk";
registerLocale('uk', uk);
setDefaultLocale('uk')


const DatePicker = ({
     data, onChange, value, id, className, maxDate, label, width, error, ...attrs
      }) => {

    const classes = classNames(
        'input',
        className,
        { error },
    ); 
   
    return (
        <div className="datepicker-wrapper" style={{width: `${width}px`}}>
        <div className="labelsWrapper">
        {label
          && <label className="inputLabel" htmlFor={id}>{label}</label>
        }
        {attrs.required
          && <span className="inputRequired">Required</span>
        }
      </div> 
            <ReactDatePicker 
                className={classes}
                selected={data}
                onChange={onChange}     
                locale="uk"
                dateFormat="dd-MM-yyyy"          
                name={id}
                maxDate={maxDate}
                popperModifiers={{
                  flip: {
                    enabled: false
                  },
                  preventOverflow: {
                    enabled: true,
                    escapeWithReference: false
                  }
                }}
            />   
            </div>
    );
};


export default DatePicker;