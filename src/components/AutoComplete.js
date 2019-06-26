import React from 'react'

export default class AutoComplete extends React.Component {
    state = {
        items: ['David', 'Damien', 'Sara', 'Jane'],
        suggestions: [],
        text: ''
    }

    onTextChange = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`${value}`, 'i');
            suggestions = this.state.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions, text: value }))
    }

    suggestionSelected (value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }

    renderSuggestions () {
        const { suggestions} = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return (
            <ul>
                {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
    }

    render() {
        const  {text} = this.state;
        return (
            <div>
                <input value={text} onChange={this.onTextChange} type="text" />
                <ul>
                    {this.renderSuggestions()}
                </ul>
            </div>
        )
    }
}