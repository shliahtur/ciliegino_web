import React from 'react';
import { connect } from 'react-redux';
import { addDocument } from '../actions';
import Input from './Input';
import DatePicker from './DatePicker';


class DocumentAdd extends React.Component {

  state = {
    documentDate: new Date(),
    receiveDate: new Date(),
    recordDate: new Date(),
    inDate: new Date(),
    outDate: new Date(),
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleDocumentDate = (date) => {
    this.setState({
       documentDate : date
    });
  }
  handleRecieveDate = (date) => {
    this.setState({
       receiveDate : date
    });
  }
  handleRecordDate = (date) => {
    this.setState({
       recordDate : date
    });
  }
  handleInDate = (date) => {
    this.setState({
       inDate : date
    });
  }
  handleOutDate = (date) => {
    this.setState({
       outDate : date
    });
  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addDocument(this.state);
  };

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Новый документ</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-container">
            <div className="input-block">

              <Input id="counterPartyCode" label="CounterPartyCode" type="text" onChange={this.handleChange} />

              <Input id="counterPartyName" label="CounterPartyName" type="text" onChange={this.handleChange} />

              <DatePicker id="documentDate" label="DocumentDate" data={this.state.documentDate} onChange={this.handleDocumentDate} />  

              <DatePicker id="recieveDate" label="RecieveDate" data={this.state.receiveDate} onChange={this.handleRecieveDate} />

              <Input id="inNum" label="InNum" type="text" onChange={this.handleChange} />

              <Input id="outNum" label="OutNum" type="text" onChange={this.handleChange} />

              <DatePicker id="inDate" label="InDate" data={this.state.inDate} onChange={this.handleInDate} />

              <DatePicker id="outDate" label="OutDate" data={this.state.outDate} onChange={this.handleOutDate} />
                       
              <Input id="requestId" label="requestId" type="text" onChange={this.handleChange} />

              <DatePicker id="recordDate" label="RecordDate" data={this.state.recordDate} onChange={this.handleRecordDate} />

              <Input id="issuerCode" label="issuerCode" type="text" onChange={this.handleChange} />

              <Input id="issuerEdrici" label="issuerEdrici" type="text" onChange={this.handleChange} />

              <Input id="issuerName" label="issuerName" type="text" onChange={this.handleChange} />

              <Input id="issin" label="issin" type="text" onChange={this.handleChange} />

              <Input id="fitext" label="fitext" type="text" onChange={this.handleChange} />

              <Input id="reasonCode" label="reasonCode" type="text" onChange={this.handleChange} />

              <Input id="reasonText" label="reasonText" type="text" onChange={this.handleChange} />

              <Input id="code" label="code" type="text" onChange={this.handleChange} />


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