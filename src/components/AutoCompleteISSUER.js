import React from 'react';
import '../styles/AutoComplete.css';
import Preloader from './Preloader';

export default class AutoComplete extends React.Component {
    state = {
        ...this.props,
        items: this.props.items,
        suggestions: [],
        text: '',
        closeBtnVisible: false,
        preloaderOn: false,
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.items !== this.props.items){
            this.setState({items: nextProps.items})
            let suggestions = [];
            nextProps.items ? suggestions = nextProps.items.sort() : suggestions = [];
            this.setState(() => ({suggestions, preloaderOn: false}))
        }
    }

    onTextChange = (e) => {      
        const value = e.target.value;
        let suggestions = [];

        if (value.length > 0) {
            this.props.onChange(value);
            this.setState({
                closeBtnVisible: true,
                preloaderOn: false,
            })
            
            this.setState(() => ({ suggestions, text: value, preloaderOn: true }))
        }
        else {
            this.setState({
                closeBtnVisible: false,
                preloaderOn: false,
                suggestions: [],
                text: ''
            })
        }
    }

    suggestionSelected(edrpou, name) {
        this.setState(() => ({
            text: edrpou,
            suggestions: [],
            closeBtnVisible: false,
            preloaderOn: false,
        }))
        this.props.setIssuer(edrpou, name)
    }

    renderSuggestions() {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul className='search-list' style={{ width: this.props.width }}>
                {suggestions.map((item) => <li key={item.id} className='search-list-item' onClick={() => this.suggestionSelected(item.EDRPOU, item.Name)}>{item.EDRPOU} <span>{item.Name}</span></li>)}
            </ul>
        )
    }
    onCancel = () => {
        this.setState({
            text: '',
            closeBtnVisible: false,
            preloaderOn: false,
            suggestions: [],
        })
    }



    render() {
        const { width, label, id, onChange, ...attrs } = this.props
        const { text } = this.state;

        return (
            <div>
                <div className="labelsWrapper">
                    {label
                        && <label className="selectLabel" htmlFor={id}>{label}</label>
                    }
                    {attrs.required
                        && <span className="selectRequired">Required</span>
                    }
                </div>
                <div>
                    {this.state.closeBtnVisible ? <div className="search-close-btn" style={{ left: `${eval(width) - 30}px` }} onClick={this.onCancel}></div> : ''}
                    <input type="text" style={{ width: `${width}px` }} name={id} value={text} onChange={this.onTextChange} type="text" />
                    {this.state.preloaderOn ? <div className="preloader-container" style={{ width: `${width}px` }}><Preloader size={4} className="autocomplete-preloader" /></div> : ""}
                </div>

                {this.renderSuggestions()}

            </div>
        )
    }
}