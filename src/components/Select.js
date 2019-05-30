import React, { Component } from 'react';
import classNames from 'classnames';

import '../styles/Select.css';

class Select extends Component {

    state = {
        ...this.props,
        on: false,
        selectedItem: this.props.value,
    }

    toggle = () => {
        this.setState({
            on: !this.state.on,
        })
    }
    
    selectItem = (desc, code) => {
     
        this.setState({
          selectedItem: desc,
          on: false
        })
      }

render() {
    const {
     onChange, value, defaultValue, width, options, id, className, label, error, ...attrs
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
            <input type="text" readOnly value={this.state.selectedItem} onChange={onChange} name={id} className={classes} {...attrs} placeholder={'Оберіть значення'} spellCheck="false" style={{width: `${width}px`}} onBlur={this.toggle} />
            {
                options !== undefined &&
                <div className={optionClasses}>
                {this.props.options.map(opt =>
                    <button type="button" onClick={() => this.selectItem(opt.Description)} key={opt.Id} value={opt.Code} style={{width: `${width}px`}}>
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


