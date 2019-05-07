import React from 'react';
import { connect } from 'react-redux';
import { addDocument } from '../actions';
import Input from './Input';

class DocumentAdd extends React.Component {
  state = { title: '', content: '' };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addDocument(this.state);
  };

  render() {
    return (
      <div>
        <h1>Новый документ</h1>
        <form onSubmit={this.handleSubmit}>

          <Input id="number" label="CounterPartyCode" type="text" onChange={this.handleChange} />

          <Input id="number" label="CounterPartyName" type="text" onChange={this.handleChange} />

          <Input id="number" label="DocumentDate" type="date" onChange={this.handleChange} /> 

          <Input id="number" label="RecieveDate" type="date" onChange={this.handleChange} />  

          <Input id="number" label="CounterPartyName" type="text" onChange={this.handleChange} /> 
        
          <Input id="number" label="CounterPartyName" type="text" onChange={this.handleChange} />
          
          <button type="submit" className="btn btn-dark">Create</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { addDocument };

export default connect(null, mapDispatchToProps)(DocumentAdd);