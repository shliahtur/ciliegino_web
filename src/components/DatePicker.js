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
       startDate, value, id, className, label, error, ...attrs
}) => {


    const classes = classNames(
        'input',
        className,
        { error },
    );

    return (
        <div className="datepicker-wrapper">
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
                onChangeRaw={this.handleDateChangeRaw}
                onChange={this.handleChange}
                selected={this.startDate}
                locale="uk"
                dateFormat="dd MMMM yyyy"
                name={id}
            />
        </div>

    );
};


export default DatePicker;