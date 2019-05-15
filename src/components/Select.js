import React, { Component } from 'react';
import classNames from 'classnames';

import '../styles/Select.css';

class Select extends Component {

    state = {
        ...this.props,
        on: false,
        selectedItem:  this.props.selectedItem,
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }
    
    selectItem = (item) => {
        this.setState({
          selectedItem: item,
        })
      }

render() {
    const {
        width, options, id, className, label, error, ...attrs
    } = this.props;

    const classes = classNames(
        'select',
        className,
        { error },
    );

  const optionClasses = classNames('fake-options', {
        'show-modal': this.state.on == true
    })
    
     const arrowClasses = classNames('fake-arrow', {
        'arrow-down': this.state.on == true
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
            <div tabindex="1">
            <i className={arrowClasses}></i> 
            <input type="text" readOnly onBlur={this.toggle} value={this.state.selectedItem} name={id} className={classes} {...attrs} placeholder={'Оберіть значення'} spellcheck="false" style={{width: `${width}px`}} onClick={this.toggle} />
           
            {
                options != undefined &&
                <div className={optionClasses}>
                {this.props.options.map(opt =>
                    <button type="button" onMouseDown={() => this.selectItem(opt.description)} key={opt.id} value={opt.code} style={{width: `${width}px`}}>
                      {opt.description} 
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


