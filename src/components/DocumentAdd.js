import React from 'react';
import { connect } from 'react-redux';
import { addDocument } from '../actions';
import Input from './Input';
import DatePicker from './DatePicker';



class DocumentAdd extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

 handleDateChange(date) {
        this.setState({
          startDate: date
        });
      }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addDocument(this.state);
  };

  render() {
    const { startDate } = this.state;
     console.log(this.state)
    return (
      <div>
        <h1>Новый документ</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-container">
            <div className="input-block">

              <DatePicker id="DocumentDate" label="DocumentDate"  onChange={this.handleDateChange} />

              <Input id="CounterPartyCode" label="CounterPartyCode" type="text" onChange={this.handleChange} />

              <Input id="CounterPartyName" label="CounterPartyName" type="text" onChange={this.handleChange} />

              <DatePicker id="RecieveDate" label="RecieveDate" onChange={this.handleChange} />

              <Input id="CounterPartyName" label="CounterPartyName" type="text" onChange={this.handleChange} />

              <Input id="CounterPartyName" label="CounterPartyName" type="text" onChange={this.handleChange} />
            </div>

            <div className="input-block">
              <DatePicker id="DocumentDate" label="DocumentDate" onChange={this.handleChange} />

              <Input id="CounterPartyCode" label="CounterPartyCode" type="text" onChange={this.handleChange} />

              <Input id="CounterPartyName" label="CounterPartyName" type="text" onChange={this.handleChange} />

              <DatePicker id="RecieveDate" label="RecieveDate" onChange={this.handleChange} />

              <Input id="CounterPartyName" label="CounterPartyName" type="text" onChange={this.handleChange} />

              <Input id="CounterPartyName" label="CounterPartyName" type="text" onChange={this.handleChange} />
            </div>

          </div>
          <button type="submit" className="btn btn-dark">Create</button>

        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { addDocument };

export default connect(null, mapDispatchToProps)(DocumentAdd);