import React from 'react';
import { connect } from 'react-redux';
import { addDocument, getDictionaries } from '../actions';
import Input from './Input';
import DatePicker from './DatePicker';
import HiddenSelect from './HiddenSelect';
import '../styles/Document.css';


class DocumentAdd extends React.Component {

  state = {
      RequestId: "",
      RequestTypeId: "",
      CounterPartyCode: "",
      CounterPartyName: "",
      InNum: "",
      OutNum: "",
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
      PaperType_1: 0,
      PaperType_2: 0,
      PaperType_3: 0,
      DigitType_1: 0,
      DigitType_2: 0,
      DigitType_3: 0,
      WithBank: false,
      WithTemp: false,
      IsTerm: false,
      dictionaries: []
  };
  
  handleChange = (event) => {
    console.log("works!  " + event.target.name + " " +  event.target.value)
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

              <Input width={600} id="RequestId" label="RequestId" name="RequestId" value={this.state.RequestId} type="text" onChange={this.handleChange} style={{backgroundColor : "#ff000024"}} />

              <HiddenSelect width={600} id="ReasonCode" hiddenValue={"Code"} width={600} options={dictionaries.Item1} value={this.state.ReasonCode} onChange={this.handleChange} label="ReasonText / Code"/> 

              <HiddenSelect width={600} id="RequestTypeId" hiddenValue={"Id"} width={600} options={dictionaries.Item3} value={this.state.RequestTypeId} onChange={this.handleChange} label="RequestTypeId"/>  

              <Input width={600} id="counterPartyCode" label="CounterPartyCode" name="CounterPartyCode" value={this.state.CounterPartyCode} type="text"  onChange={this.handleChange} />

              <Input width={600} id="counterPartyName" label="CounterPartyName" name="CounterPartyName" value={this.state.CounterPartyName} type="text" onChange={this.handleChange} />

              <DatePicker width={600} id="documentDate" maxDate={Date.now()} label="DocumentDate" data={this.state.DocumentDate} onChange={this.handleDocumentDate} />  

              <DatePicker width={600} id="recieveDate" maxDate={Date.now()} label="RecieveDate" data={this.state.ReceiveDate} onChange={this.handleRecieveDate} />

              <Input width={600} id="inNum" label="InNum" type="text" name="InNum" value={this.state.InNum} onChange={this.handleChange} />

              <Input width={600} id="outNum" label="OutNum" type="text" name="OutNum" value={this.state.OutNum} onChange={this.handleChange} />

              <DatePicker width={600} id="inDate" maxDate={Date.now()} label="InDate" data={this.state.InDate} onChange={this.handleInDate} />

              <DatePicker width={600} id="outDate" maxDate={Date.now()} label="OutDate" data={this.state.OutDate} onChange={this.handleOutDate} />
    
              <DatePicker width={600} id="recordDate" label="RecordDate" data={this.state.RecordDate} onChange={this.handleRecordDate} />

              <Input width={600} id="issuerCode" label="issuerCode" type="text" name="IssuerCode" value={this.state.IssuerCode} onChange={this.handleChange} />

              <Input width={600} id="issuerEdrici" label="issuerEdrici" type="text" name="IssuerEdrici" value={this.state.IssuerEdrici} onChange={this.handleChange} />

              <Input width={600} id="issuerName" label="issuerName" type="text" name="IssuerName" value={this.state.IssuerName}  onChange={this.handleChange} />

              <Input width={600} id="issin" label="issin" type="text" name="Isin" value={this.state.Isin} onChange={this.handleChange} />

              <Input width={600} id="fitext" label="fitext" type="text" name="Fitext" value={this.state.Fitext} onChange={this.handleChange} />

            </div>
          </div>
          <button type="submit" className="submit-btn">Створити</button>

        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {getDictionaries, addDocument };

const mapStateToProps = (state) => ({ dictionaries: state.dictionaries });

export default connect(mapStateToProps, mapDispatchToProps)(DocumentAdd);