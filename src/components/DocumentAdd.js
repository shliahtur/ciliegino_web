import React from 'react';
import { connect } from 'react-redux';
import { addDocument, getDictionaries } from '../actions';
import Input from './Input';
import DatePicker from './DatePicker';
import Select from './Select';


class DocumentAdd extends React.Component {

  state = {
    RequestTypeId: "2",
    CounterPartyCode: "123123",
    CounterPartyName: "Test",
    InNum: "1",
    OutNum: "1",
    RequestId: "1",
    IssuerCode: "123123",
    IssuerEdrici: "123123",
    IssuerName: "TestTest",
    Isin: "12323", 
    Fitext: "text",
    ReasonCode: "1",
    ReasonText: "1",
    Code: "1",
    DocumentDate: new Date(),
    ReceiveDate: new Date(),
    RecordDate: new Date(),
    InDate: new Date(),
    OutDate: new Date(),
    dictionaries: []
  };
  
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleDocumentDate = (date) => {
    this.setState({
       DocumentDate : date
    });
  }
  handleRecieveDate = (date) => {
    this.setState({
       ReceiveDate : date
    });
  }
  handleRecordDate = (date) => {
    this.setState({
       RecordDate : date
    });
  }
  handleInDate = (date) => {
    this.setState({
       InDate : date
    });
  }
  handleOutDate = (date) => {
    this.setState({
       OutDate : date
    });
  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addDocument(this.state);
  };


  componentDidMount() {

     this.props.getDictionaries();

  }

  render() {
    const dictionaries = this.props.dictionaries;
 
    return (
      <div>
        <h1>Новый документ</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-container">
            <div className="input-block">

              <Select id="doc-select" width={600} options={dictionaries.item1} label="Выпадающий список"/> 

              <Select id="doc-select" width={600} options={dictionaries.item2} label="Выпадающий список"/> 

              <Select id="doc-select" width={600} options={dictionaries.item3} label="Выпадающий список"/>  

              <Input id="RequestTypeId" label="RequestTypeId" name="RequestTypeId" value={this.state.RequestTypeId} type="text"  onChange={this.handleChange} />

              <Input id="counterPartyCode" label="CounterPartyCode" name="CounterPartyCode" value={this.state.CounterPartyCode} type="text"  onChange={this.handleChange} />

              <Input id="counterPartyName" label="CounterPartyName" name="CounterPartyName" value={this.state.CounterPartyName} type="text" onChange={this.handleChange} />

              <DatePicker id="documentDate" label="DocumentDate" data={this.state.DocumentDate} onChange={this.handleDocumentDate} />  

              <DatePicker id="recieveDate" label="RecieveDate" data={this.state.ReceiveDate} onChange={this.handleRecieveDate} />

              <Input id="inNum" label="InNum" type="text" name="InNum" value={this.state.InNum} onChange={this.handleChange} />

              <Input id="outNum" label="OutNum" type="text" name="OutNum" value={this.state.OutNum} onChange={this.handleChange} />

              <DatePicker id="inDate" label="InDate" data={this.state.InDate} onChange={this.handleInDate} />

              <DatePicker id="outDate" label="OutDate" data={this.state.OutDate} onChange={this.handleOutDate} />
                       
              <Input id="requestId" label="requestId" type="text" name="RequestId" value={this.state.RequestId} onChange={this.handleChange} />

              <DatePicker id="recordDate" label="RecordDate" data={this.state.RecordDate} onChange={this.handleRecordDate} />

              <Input id="issuerCode" label="issuerCode" type="text" name="IssuerCode" value={this.state.IssuerCode} onChange={this.handleChange} />

              <Input id="issuerEdrici" label="issuerEdrici" type="text" name="IssuerEdrici" value={this.state.IssuerEdrici} onChange={this.handleChange} />

              <Input id="issuerName" label="issuerName" type="text" name="IssuerName" value={this.state.IssuerName}  onChange={this.handleChange} />

              <Input id="issin" label="issin" type="text" name="Isin" value={this.state.Isin} onChange={this.handleChange} />

              <Input id="fitext" label="fitext" type="text" name="Fitext" value={this.state.Fitext} onChange={this.handleChange} />

              <Input id="reasonCode" label="reasonCode" type="text" name="ReasonCode" value={this.state.ReasonCode} onChange={this.handleChange} />

              <Input id="reasonText" label="reasonText" type="text" name="ReasonText" value={this.state.ReasonText} onChange={this.handleChange} />

              <Input id="code" label="code" type="text" name="Code" value={this.state.Code} onChange={this.handleChange} /> 


            </div>
          </div>
          <button type="submit" className="btn btn-dark">Create</button>

        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {getDictionaries, addDocument };

const mapStateToProps = (state) => ({ dictionaries: state.dictionaries });

export default connect(mapStateToProps, mapDispatchToProps)(DocumentAdd);