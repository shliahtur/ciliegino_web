import React from 'react';
import { connect } from 'react-redux';
import { addDocument, getDictionaries, getIsins, getCompanies } from '../actions';
import Input from './Input';
import DatePicker from './DatePicker';
import HiddenSelect from './HiddenSelect';
import AutoCompleteISIN from './AutoCompleteISIN';
import AutoCompleteISSUER from './AutoCompleteISSUER';
import Mask from './Mask';

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
    WithBank: 0,
    WithTemp: 0,
    IsTerm: 0,
    dictionaries: [], 
    isins: [],
    companies: [],
  };

  handleChange = (event) => {
    console.log("works!  " + event.target.name + " " + event.target.value)
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDocumentDate = (date) => {
    this.setState({
      DocumentDate: date
    });
  }
  handleRecieveDate = (date) => {
    this.setState({
      ReceiveDate: date
    });
  }
  handleRecordDate = (date) => {
    this.setState({
      RecordDate: date
    });
  }
  handleInDate = (date) => {
    this.setState({
      InDate: date
    });
  }
  handleOutDate = (date) => {
    this.setState({
      OutDate: date
    });
  }

  handleChangeCheck = (event) => {
    this.setState({
      [event.target.name]: !this.state[event.target.name] ? 1 : 0
    })
  }
  handleIsinChange = (value) => {
    this.props.getIsins(value);
    this.setState({
      Isin: value
    })
  }
  handleIssuerChange = (value) => {
    this.props.getCompanies(value);
    this.setState({
      IssuerCode: value,
    })
  }

  setIsin = (isin, text) => {
    this.setState({
      Fitext : text,
      Isin: isin
    })
  }

   setIssuer = (edrpou, name) => {
     this.setState({
       IssuerName: name,
       IssuerCode: edrpou
     })
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
    const isins = this.props.isins;
    const companies = this.props.companies;

    return (
      <div>
        <h1>Новый запрос</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-container">
            <div className="input-block">

              <HiddenSelect width={600} id="ReasonCode" hiddenValue={"Code"} width={600} options={dictionaries.Item1} value={this.state.ReasonCode} onChange={this.handleChange} label="ReasonText / Code" />

              <HiddenSelect width={600} id="RequestTypeId" hiddenValue={"Id"} width={600} options={dictionaries.Item3} value={this.state.RequestTypeId} onChange={this.handleChange} label="RequestTypeId" /> 

              <Mask width={600} label="CounterPartyCode" mask="11111111" placeholder="XXXXXXXX" name="CounterPartyCode" size="8" value={this.state.CounterPartyCode} onChange={this.handleChange}/>

              <Input width={600} id="counterPartyName" label="CounterPartyName" name="CounterPartyName" value={this.state.CounterPartyName} type="text" onChange={this.handleChange} />

              <DatePicker width={600} id="documentDate" maxDate={Date.now()} label="DocumentDate" data={this.state.DocumentDate} onChange={this.handleDocumentDate} />

              <DatePicker width={600} id="recieveDate" maxDate={Date.now()} label="RecieveDate" data={this.state.ReceiveDate} onChange={this.handleRecieveDate} />

              <Input width={600} id="inNum" label="InNum" type="text" name="InNum" value={this.state.InNum} onChange={this.handleChange} />

              <Input width={600} id="outNum" label="OutNum" type="text" name="OutNum" value={this.state.OutNum} onChange={this.handleChange} />

              <DatePicker width={600} id="inDate" maxDate={Date.now()} label="InDate" data={this.state.InDate} onChange={this.handleInDate} />

              <DatePicker width={600} id="outDate" maxDate={Date.now()} label="OutDate" data={this.state.OutDate} onChange={this.handleOutDate} />

              <DatePicker width={600} id="recordDate" label="RecordDate" data={this.state.RecordDate} onChange={this.handleRecordDate} />
    
              <AutoCompleteISSUER width={600} items={companies} id="issuerCode" label="issuerCode" name="issuerCode" setIssuer={this.setIssuer} value={this.state.issuerCode} onChange={this.handleIssuerChange}/>

              <Input width={600} id="issuerName" label="issuerName" type="text" name="IssuerName" value={this.state.IssuerName} onChange={this.handleChange} />

              <Input width={600} id="issuerEdrici" label="issuerEdrici" type="text" name="IssuerEdrici" value={this.state.IssuerEdrici} onChange={this.handleChange} />

              <AutoCompleteISIN width={600} items={isins} id="isin" label="Isin" name="Isin" setIsin={this.setIsin} value={this.state.Isin} onChange={this.handleIsinChange}/>

              <Input width={600} id="fitext" readOnly label="fitext" type="text" name="Fitext" value={this.state.Fitext} onChange={this.handleChange} />

              <div className="chk-container">
                <label>
                  <input type="checkbox" className="chk" name="IsTerm" defaultChecked={this.state.IsTerm} onChange={this.handleChangeCheck} />
                  Терміново
            </label>
              </div>
              <div className="chk-container">
                <label>
                  <input type="checkbox" className="chk" name="WithBank" defaultChecked={this.state.WithBank} onChange={this.handleChangeCheck} />
                  З банківськими реквізитами
            </label>
              </div>
              <div className="chk-container">
                <label>
                  <input type="checkbox" className="chk" name="WithTemp" defaultChecked={this.state.WithTemp} onChange={this.handleChangeCheck} />
                  за ТГС
            </label>
              </div>
            </div>
          </div>
          <button type="submit" className="submit-btn">Створити</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { getDictionaries, getIsins, getCompanies, addDocument };

const mapStateToProps = (state) => ({ dictionaries: state.dictionaries, isins: state.isins, companies: state.companies });

export default connect(mapStateToProps, mapDispatchToProps)(DocumentAdd);