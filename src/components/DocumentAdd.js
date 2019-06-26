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


const validationMessages = {
  empty: "Це обов`язкове поле",
  emptySelect: "Оберіть пункт із випадаючого списку",
  numOnly: "Допускаються лише цифри",
  charsOnly: "Допускаются лише букви",
}

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
    isins: [],
    companies: [],
    isPreloader: false,
    EditIssuerBtn: false,
    issuerNameEditable: false,

    /// validation
    errors: false,
    errorCounterPartyName: '',
    errorInNum: '',
    errorOutNum: '',
    errorIssuerEdrici: '',
    errorCounterPartyCode: '',
    errorFiText: '',
    errorIsin: '',
    errorRequestTypeId: '',
    errorReasonCode: '',
    errorIssuerCode: '',
    errorIssuerName: '',
  };

  componentDidMount() {
    this.props.getDictionaries();
  }

  handleChange = (event) => {
    let errorHandler = "error" + event.target.name
    this.setState({
      [event.target.name]: event.target.value
    });

    if (event.target.value.length > 0) {
      this.setState({
        [errorHandler]: '',
      })
    }
    else {
      this.setState({
        [errorHandler]: validationMessages.empty,
      })
    }
    if (!this.state.errorCounterPartyName && !this.state.errorInNum && !this.state.errorOutNum && !this.state.errorIssuerEdrici &&
      !this.state.errorCounterPartyCode && !this.state.errorFiText && !this.state.errorIsin && !this.state.errorRequestTypeId &&
      !this.state.errorReasonCode && !this.state.errorIssuerCode && !this.state.errorIssuerName) {
      this.setState({
        errors: false
      })
    }
  };

  handleDate = (date, name) => {
    this.setState({
      [name]: date
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
      Fitext: text,
      Isin: isin,
      errorFiText: '',
      errorIsin: '',
    })
  }

  setIssuer = (edrpou, name) => {
    this.setState({
      IssuerName: name,
      IssuerCode: edrpou,
      EditIssuerBtn: true,
      errorIssuerCode: '',
      errorIssuerName: '',
    })
  }
  editIssuer = () => {
    this.setState({
      issuerNameEditable: true
    })
  }


  validate = () => {
    let errorCounterPartyName = '';
    let errorInNum = '';
    let errorOutNum = '';
    let errorIssuerEdrici = '';
    let errorCounterPartyCode = '';
    let errorIsin = '';
    let errorFiText = '';
    let errorRequestTypeId = '';
    let errorReasonCode = '';
    let errorIssuerCode = '';
    let errorIssuerName = '';


    if (!this.state.CounterPartyName) {
      errorCounterPartyName = validationMessages.empty;
    }
    if (!this.state.InNum) {
      errorInNum = validationMessages.empty;
    }
    if (!this.state.OutNum) {
      errorOutNum = validationMessages.empty;
    }
    if (!this.state.IssuerEdrici) {
      errorIssuerEdrici = validationMessages.empty;
    }
    if (!this.state.CounterPartyCode) {
      errorCounterPartyCode = validationMessages.empty;
    }
    if (!this.state.Isin) {
      errorIsin = validationMessages.empty;
    }
    if (!this.state.Fitext) {
      errorFiText = validationMessages.empty;
    }
    if (!this.state.RequestTypeId) {
      errorRequestTypeId = validationMessages.emptySelect;
    }
    if (!this.state.ReasonCode) {
      errorReasonCode = validationMessages.emptySelect;
    }
    if (!this.state.IssuerName) {
      errorIssuerName = validationMessages.empty;
    }
    if (!this.state.IssuerCode) {
      errorIssuerCode = validationMessages.empty;
    }


    if (errorCounterPartyName || errorInNum || errorOutNum || errorIssuerEdrici || errorCounterPartyCode ||
      errorFiText || errorIsin || errorRequestTypeId || errorReasonCode || errorIssuerName || errorIssuerCode
    ) {
      this.setState({
        errors: true, errorCounterPartyName, errorInNum, errorOutNum, errorIssuerEdrici,
        errorCounterPartyCode, errorFiText, errorIsin, errorRequestTypeId, errorReasonCode, errorIssuerName, errorIssuerCode
      });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const isValid = this.validate();
    if (isValid) {

      this.setState({
        isPreloader: true
      })

      this.props.addDocument(this.state);
    }
  };

  render() {
    const dictionaries = this.props.dictionaries;
    const isins = this.props.isins;
    const companies = this.props.companies;

    return (
      <div className="document-wrapper">
        <form onSubmit={this.handleSubmit}>
          <div className="form-container">
            <div className="document-title">Нове розпорядження</div>
            <div className="input-block">
              <div className="date-block">

                <Input error={this.state.errorOutNum} width={250} id="outNum" label="Вихідний номер" type="text" name="OutNum" value={this.state.OutNum} onChange={this.handleChange} />

                <DatePicker width={250} id="OutDate" maxDate={Date.now()} label="Від" data={this.state.OutDate} onChange={this.handleDate} />

                <div className="chk-container">
                  <input type="checkbox" className="chk" name="IsTerm" defaultChecked={this.state.IsTerm} onChange={this.handleChangeCheck} />
                  Терміново
                  </div>

              </div>
              <div className="pair-block">
                <Input error={this.state.errorInNum} width={250} id="inNum" label="Вхідний номер" type="text" name="InNum" value={this.state.InNum} onChange={this.handleChange} />

                <DatePicker width={250} id="InDate" maxDate={Date.now()} label="Вхідна дата" data={this.state.InDate} onChange={this.handleDate} />
              </div>
            </div>
            <div className="input-block">

              <DatePicker width={250} id="RecordDate" label="Дата обліку" data={this.state.RecordDate} onChange={this.handleDate} />

              <Input error={this.state.errorCounterPartyName} width={400} id="counterPartyName" label="Найменування" name="CounterPartyName" value={this.state.CounterPartyName} type="text" onChange={this.handleChange} />

              <Mask error={this.state.errorCounterPartyCode} width={150} label="Код за ЄДРПОУ" mask="11111111" placeholder="XXXXXXXX" id="CounterPartyCode" size="8" value={this.state.CounterPartyCode} onChange={this.handleChange} />

              <AutoCompleteISIN error={this.state.errorIsin} width={400} items={isins} id="isin" label="Isin" name="Isin" setIsin={this.setIsin} value={this.state.Isin} onChange={this.handleIsinChange} />

              <Input width={400} error={this.state.errorFiText} placeholder="за ISIN" id="fitext" className={'input-disabled'} readOnly label="fitext" type="text" name="Найменування" value={this.state.Fitext} onChange={this.handleChange} />

            </div>
            <div className="input-block">
              <HiddenSelect width={600} error={this.state.errorReasonCode} id="ReasonCode" hiddenValue={"Code"} options={dictionaries.Item1} value={this.state.ReasonCode} onChange={this.handleChange} label="Підстава" />

              <HiddenSelect width={600} error={this.state.errorRequestTypeId} id="RequestTypeId" hiddenValue={"Id"} options={dictionaries.Item3} value={this.state.RequestTypeId} onChange={this.handleChange} label="Тип" />
  
              <DatePicker width={250} id="DocumentDate" maxDate={Date.now()} label="Дата запиту" data={this.state.DocumentDate} onChange={this.handleDate} />
               
              <input type="hidden" name="RecieveDate" value={this.state.ReceiveDate} />

    
              <AutoCompleteISSUER error={this.state.errorIssuerCode} width={600} items={companies} id="issuerCode" label="issuerCode" name="issuerCode" setIssuer={this.setIssuer} value={this.state.issuerCode} onChange={this.handleIssuerChange} />

              <div style={{ position: "relative" }}>
                {this.state.EditIssuerBtn &&
                  <div className="edit-issuer-btn" onClick={this.editIssuer} style={{ left: "560px" }}></div>
                }
                {this.issuerNameEditable ?
                  <Input error={this.state.errorIssuerName} placeholder="За ЄДРПОУ" width={600} className={'input-disabled'} id="issuerName" label="issuerName" type="text" name="IssuerName" value={this.state.IssuerName} onChange={this.handleChange} />
                  :
                  <Input error={this.state.errorIssuerName} readOnly placeholder="За ЄДРПОУ" width={600} className={'input-disabled'} id="issuerName" label="issuerName" type="text" name="IssuerName" value={this.state.IssuerName} onChange={this.handleChange} />
                }
              </div>

              <Input error={this.state.errorIssuerEdrici} width={250} id="issuerEdrici" label="issuerEdrici" type="text" name="IssuerEdrici" value={this.state.IssuerEdrici} onChange={this.handleChange} />


              <div className="chk-container">
                <input type="checkbox" className="chk" name="WithBank" defaultChecked={this.state.WithBank} onChange={this.handleChangeCheck} />
                З банківськими реквізитами
              </div>

              <div className="chk-container">
                <input type="checkbox" className="chk" name="WithTemp" defaultChecked={this.state.WithTemp} onChange={this.handleChangeCheck} />
                за ТГС
              </div>
            </div>
          </div>
          <button type="submit" className="submit-btn">Створити</button>
          {this.state.errors && <div className="validation-error-message">Виправте помилки при заповненні форми!</div>}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { getDictionaries, getIsins, getCompanies, addDocument };

const mapStateToProps = (state) => ({
  dictionaries: state.dictionaries,
  isins: state.isins,
  companies: state.companies,
  isPreloader: state.isPreloader
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentAdd);