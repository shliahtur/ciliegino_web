import React from 'react';
import { connect } from 'react-redux';
import { addDocument, getDictionaries } from '../actions';
import Input from './Input';
import DatePicker from './DatePicker';
import Select from './Select';
import HiddenSelect from './HiddenSelect'


class DocumentAdd extends React.Component {

  state = {
      RequestTypeId: "",
      CounterPartyCode: "",
      CounterPartyName: "",
      InNum: "",
      OutNum: "",
      RequestId: "",
      IssuerCode: "",
      IssuerEdrici: "",
      IssuerName: "",
      Isin: "", 
      Fitext: "",
      ReasonCode: "",
      ReasonText: "",
      DocumentDate: new Date(),
      ReceiveDate: new Date(),
      RecordDate: new Date(),
      InDate: new Date(),
      OutDate: new Date(),
      dictionaries: []
  };
  
  handleChange = (event) => {
    console.log("works!  " + event.target.name + " " +  event.target.value)
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSelect = (event) => {
    console.log("works!  " + event.target.name + "  " + event.target.value)
    this.setState({[event.target.name] : event.target.value});
  }
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

              <HiddenSelect id="ReasonCode" width={600} options={dictionaries.Item1} value={this.state.ReasonCode} onChange={this.handleSelect} label="ReasonText / Code"/> 

              <HiddenSelect id="RequestTypeId" width={600} options={dictionaries.Item3} value={this.state.RequestTypeId} onChange={this.handleChange} label="RequestTypeId"/>  

              <Input id="counterPartyCode" label="CounterPartyCode" name="CounterPartyCode" value={this.state.CounterPartyCode} type="text"  onChange={this.handleChange} />

              <Input id="counterPartyName" label="CounterPartyName" name="CounterPartyName" value={this.state.CounterPartyName} type="text" onChange={this.handleChange} />

              <DatePicker id="documentDate" maxDate={Date.now()} label="DocumentDate" data={this.state.DocumentDate} onChange={this.handleDocumentDate} />  

              <DatePicker id="recieveDate" maxDate={Date.now()} label="RecieveDate" data={this.state.ReceiveDate} onChange={this.handleRecieveDate} />

              <Input id="inNum" label="InNum" type="text" name="InNum" value={this.state.InNum} onChange={this.handleChange} />

              <Input id="outNum" label="OutNum" type="text" name="OutNum" value={this.state.OutNum} onChange={this.handleChange} />

              <DatePicker id="inDate" maxDate={Date.now()} label="InDate" data={this.state.InDate} onChange={this.handleInDate} />

              <DatePicker id="outDate" maxDate={Date.now()} label="OutDate" data={this.state.OutDate} onChange={this.handleOutDate} />
    
              <DatePicker id="recordDate" label="RecordDate" data={this.state.RecordDate} onChange={this.handleRecordDate} />

              <Input id="issuerCode" label="issuerCode" type="text" name="IssuerCode" value={this.state.IssuerCode} onChange={this.handleChange} />

              <Input id="issuerEdrici" label="issuerEdrici" type="text" name="IssuerEdrici" value={this.state.IssuerEdrici} onChange={this.handleChange} />

              <Input id="issuerName" label="issuerName" type="text" name="IssuerName" value={this.state.IssuerName}  onChange={this.handleChange} />

              <Input id="issin" label="issin" type="text" name="Isin" value={this.state.Isin} onChange={this.handleChange} />

              <Input id="fitext" label="fitext" type="text" name="Fitext" value={this.state.Fitext} onChange={this.handleChange} />

            </div>
          </div>
          <button type="submit" className="submit-btn">Відравити</button>

        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {getDictionaries, addDocument };

const mapStateToProps = (state) => ({ dictionaries: state.dictionaries });

export default connect(mapStateToProps, mapDispatchToProps)(DocumentAdd);