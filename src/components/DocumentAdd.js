import React from 'react';
import { connect } from 'react-redux';
import { addDocument } from '../actions';
import Input from './Input';
import DatePicker from './DatePicker';


class DocumentAdd extends React.Component {

  state = {
    counterPartyCode: "",
    counterPartyName: "",
    inNum: "",
    outNum: "",
    requestId: "1",
    issuerCode: "",
    issuerEdrici: "",
    issuerName: "",
    isin: "", 
    fitext: "",
    reasonCode: "",
    reasonText: "",
    code: "",
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

              <Input id="counterPartyCode" label="CounterPartyCode" name="counterPartyCode" value={this.state.counterPartyCode} type="text"  onChange={this.handleChange} />

              <Input id="counterPartyName" label="CounterPartyName" name="counterPartyName" value={this.state.counterPartyName} type="text" onChange={this.handleChange} />

              <DatePicker id="documentDate" label="DocumentDate" data={this.state.documentDate} onChange={this.handleDocumentDate} />  

              <DatePicker id="recieveDate" label="RecieveDate" data={this.state.receiveDate} onChange={this.handleRecieveDate} />

              <Input id="inNum" label="InNum" type="text" name="inNum" value={this.state.inNum} onChange={this.handleChange} />

              <Input id="outNum" label="OutNum" type="text" name="outNum" value={this.state.outNum} onChange={this.handleChange} />

              <DatePicker id="inDate" label="InDate" data={this.state.inDate} onChange={this.handleInDate} />

              <DatePicker id="outDate" label="OutDate" data={this.state.outDate} onChange={this.handleOutDate} />
                       
              <Input id="requestId" label="requestId" type="text" name="requestId" value={this.state.requestId} onChange={this.handleChange} />

              <DatePicker id="recordDate" label="RecordDate" data={this.state.recordDate} onChange={this.handleRecordDate} />

              <Input id="issuerCode" label="issuerCode" type="text" name="issuerCode" value={this.state.issuerCode} onChange={this.handleChange} />

              <Input id="issuerEdrici" label="issuerEdrici" type="text" name="issuerEdrici" value={this.state.issuerEdrici} onChange={this.handleChange} />

              <Input id="issuerName" label="issuerName" type="text" name="issuerName" value={this.state.issuerName}  onChange={this.handleChange} />

              <Input id="issin" label="issin" type="text" name="issin" value={this.state.issin} onChange={this.handleChange} />

              <Input id="fitext" label="fitext" type="text" name="fitext" value={this.state.fitext} onChange={this.handleChange} />

              <Input id="reasonCode" label="reasonCode" type="text" name="reasonCode" value={this.state.reasonCode} onChange={this.handleChange} />

              <Input id="reasonText" label="reasonText" type="text" name="reasonText" value={this.state.reasonText} onChange={this.handleChange} />

              <Input id="code" label="code" type="text" name="code" value={this.state.code} onChange={this.handleChange} />


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