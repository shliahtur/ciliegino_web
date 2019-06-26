import React from 'react';
import '../styles/AutoComplete.css';
import Preloader from './Preloader';
import Mask from './Mask';

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
        let value = e.target.value;
        value = value.replace(/_/g, "");
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
            <ul className='search-list' style={{ width: this.props.width }} >
                {suggestions.map((item) => <li className='search-list-item' onClick={() => this.suggestionSelected(item.EDRPOU, item.Name)}>{item.EDRPOU} <span>{item.Name}</span></li>)}
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

        /////////////// toggle onBlur ///////////////////////////////////////////////////////
        issuerRef = React.createRef();

        componentDidMount() {                                                       
            document.addEventListener('mousedown', (event)=>{
                
                if (this.issuerRef && !this.issuerRef.contains(event.target) ) {
                    this.setState({
                        suggestions: [],
                        preloaderOn: false,
                    })
                }
            });
        }

        componentWillUnmount() {
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
        ///////////////////////////////////////////////////////////////////////////////////////


    render() {
        const { width, label, id, onChange, error, ...attrs } = this.props
        const { text } = this.state;

        return (
            <div ref={elem => this.issuerRef = elem}>
                <div className="labelsWrapper">
                    {label
                        && <label className="selectLabel" htmlFor={id}>{label}</label>
                    }
                    {attrs.required
                        && <span className="selectRequired">Required</span>
                    }
                </div>
                <div>
                    {this.state.closeBtnVisible ? <div className="search-close-btn" style={{ left: `${+width - 30}px` }} onClick={this.onCancel}></div> : ''}
                    <Mask error={error} width={width} mask="11111111" placeholder="XXXXXXXX" name={id} size="8" value={text} onChange={this.onTextChange}/>
                    {this.state.preloaderOn ? <div className="preloader-container" style={{ width: `${width}px` }}><Preloader size={4} className="autocomplete-preloader" /></div> : ""}
                </div>

                {this.renderSuggestions()}

            </div>
        )
    }
}