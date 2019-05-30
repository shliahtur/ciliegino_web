import React, { Component } from 'react';
import classNames from 'classnames';

import '../styles/Select.css';

class Select extends Component {

    state = {
        ...this.props,
        on: false,
        selectedItem: this.props.value,
        reasonCode: ""
    }

    toggle = () => {
        this.setState({
            on: !this.state.on,
        })
    }
    
    selectItem = (desc, code) => {
        this.setState({
          selectedItem: desc,
          reasonCode: code,
          on: false
        })
      }

      handleClick = (e, desc, code) => {
        this.selectItem(desc, code);
        this.props.onChange(e);
      }

render() {
    const {
    hiddenValue, onChange, value, defaultValue, width, options, id, className, label, error, ...attrs
    } = this.props;

    if(defaultValue != null && defaultValue.legth > 0){
        this.state.selectedItem = defaultValue
    }
   
    const classes = classNames(
        'select',
        className,
        { error },
    );

     const optionClasses = classNames('fake-options', {
        'show-modal': this.state.on === true
    })
    
     const arrowClasses = classNames('fake-arrow', {
        'arrow-down': this.state.on === true
    })

    return (
        <div className="selectWrapper">
            <div className="labelsWrapper">
                {label
                    && <label className="selectLabel" htmlFor={id}>{label}</label>
                }
                {attrs.required
                    && <span className="selectRequired">Required</span>
                }
            </div>
            <div>
            <i className={arrowClasses}></i> 
            <input type="text" readOnly value={this.state.selectedItem} className={classes} {...attrs} placeholder={'Оберіть значення'} spellCheck="false" style={{width: `${width}px`}} onClick={this.toggle} />
            <input type="hidden" value={this.state.reasonCode} /> 
            {
                options !== undefined &&
                <div className={optionClasses}>
                {this.props.options.map(opt =>
                    <button type="button" onClick={(e) => this.handleClick(e, opt.Description, opt.Code)} key={opt.Id} name={id} value={eval(`opt.${hiddenValue}`)} style={{width: `${width}px`}}>
                      {opt.Description} 
                    </button>)}
                </div>
            }
          </div>
            {error
                && <span className="selectError">{error}</span>
            }
        </div>
    );
}

}
export default Select;


