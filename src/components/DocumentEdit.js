import React from 'react';
import { connect } from 'react-redux';
import history from '../history';
import { updateDocument, getDictionaries, getIsins, getCompanies, getDocument } from '../actions';
import Input from './Input';
import DatePicker from './DatePicker';
import HiddenSelect from './HiddenSelect';
import AutoCompleteISIN from './AutoCompleteISIN';
import AutoCompleteISSUER from './AutoCompleteISSUER';
import Mask from './Mask';
import "../styles/Document.css";


const validationMessages = {
  empty: "Це обов`язкове поле",
  emptySelect: "Оберіть пункт із випадаючого списку",
  numOnly: "Допускаються лише цифри",
  charsOnly: "Допускаются лише букви",
}

class DocumentEdit extends React.Component {

  state = {
    RequestId: this.props.document.RequestId,
    RequestTypeId: this.props.document.RequestTypeId,
    CounterPartyCode: this.props.document.CounterPartyCode,
    CounterPartyName: this.props.document.CounterPartyName,
    InNum: this.props.document.InNum,
    OutNum: this.props.document.OutNum,
    IssuerCode: this.props.document.IssuerCode,
    IssuerEdrici: this.props.document.IssuerEdrici,
    IssuerName: this.props.document.IssuerName,
    Isin: this.props.document.Isin,
    Fitext: this.props.document.Fitext,
    ReasonCode: this.props.document.ReasonCode,
    ReasonText: this.props.document.ReasonText,
    Code: this.props.document.Code,
    DocumentDate: new Date(this.props.document.DocumentDate),
    ReceiveDate: new Date(this.props.document.ReceiveDate),
    RecordDate: new Date(this.props.document.RecordDate),
    InDate: new Date(this.props.document.InDate),
    OutDate: new Date(this.props.document.OutDate),
    WithBank: this.props.document.WithBank,
    WithTemp: this.props.document.WithTemp,
    IsTerm: this.props.document.IsTerm,
    defaultReason: this.props.dictionaries.Item1 ? this.props.dictionaries.Item1.filter(x => x.Code === this.props.document.ReasonCode)[0].Description : "",
    defaultCode: this.props.dictionaries.Item2 ? this.props.dictionaries.Item2.filter(x => x.Code === this.props.document.Code)[0].Description : "",
    defaultType: this.props.dictionaries.Item3 ? this.props.dictionaries.Item3.filter(x => x.Id === this.props.document.RequestTypeId)[0].Description : "",
    dictionaries: this.props.dictionaries,
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
    if(!this.state.RequestId){
      this.props.getDocument(history.params.RequestId)
    }
  }
  shouldComponentUpdate() {
    return true
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
      const RequestId = this.props.document.RequestId;
      const RequestTypeId = this.state.RequestTypeId ? this.state.RequestTypeId : this.props.document.RequestTypeId;
      const CounterPartyCode = this.state.CounterPartyCode ? this.state.CounterPartyCode : this.props.document.CounterPartyCode;
      const CounterPartyName = this.state.CounterPartyName ? this.state.CounterPartyName : this.props.document.CounterPartyName;
      const DocumentDate = this.state.DocumentDate;
      const ReceiveDate = this.state.RecieveDate ? this.state.ReceiveDate : this.props.document.ReceiveDate;
      const InNum = this.state.InNum ? this.state.InNum : this.props.document.InNum;
      const OutNum = this.state.OutNum ? this.state.OutNum : this.props.document.OutNum;
      const InDate = this.state.InDate ? this.state.InDate : this.props.document.InDate;
      const OutDate = this.state.OutDate ? this.state.OutDate : this.props.document.OutDate;
      const RecordDate = this.state.RecordDate ? this.state.OutDate : this.props.document.OutDate;
      const IssuerCode = this.state.IssuerCode ? this.state.IssuerCode : this.props.document.IssuerCode;
      const IssuerEdrici = this.state.IssuerEdrici ? this.state.IssuerEdrici : this.props.document.IssuerEdrici;
      const IssuerName = this.state.IssuerName ? this.state.IssuerName : this.props.document.IssuerName;
      const Isin = this.state.Isin ? this.state.Isin : this.props.document.Isin;
      const Fitext = this.state.Fitext ? this.state.Fitext : this.props.document.Fitext;
      const PaperType_1 = this.state.PaperType_1 ? this.state.PaperType_1 : this.props.document.PaperType_1;
      const PaperType_2 = this.state.PaperType_2 ? this.state.PaperType_2 : this.props.document.PaperType_2;
      const PaperType_3 = this.state.PaperType_3 ? this.state.PaperType_3 : this.props.document.PaperType_3;
      const DigitType_1 = this.state.DigitType_1 ? this.state.DigitType_1 : this.props.document.DigitType_1;
      const DigitType_2 = this.state.DigitType_2 ? this.state.DigitType_2 : this.props.document.DigitType_2;
      const DigitType_3 = this.state.DigitType_3 ? this.state.DigitType_3 : this.props.document.DigitType_3;
      const WithBank = this.state.WithBank;
      const WithTemp = this.state.WithTemp;
      const IsTerm = this.state.IsTerm;
      const ReasonCode = this.state.ReasonCode ? this.state.ReasonCode : this.props.document.ReasonCode;
      const ReasonText = this.state.ReasonText ? this.state.ReasonText : this.props.document.ReasonText;
      const Code = this.state.Code ? this.state.Code : this.props.document.Code;

      const document = {
        RequestId: RequestId, RequestTypeId: RequestTypeId, CounterPartyCode: CounterPartyCode, CounterPartyName: CounterPartyName, InNum: InNum,
        OutNum: OutNum, RecordDate: RecordDate, IssuerCode: IssuerCode, IssuerEdrici: IssuerEdrici, IssuerName: IssuerName, Isin: Isin,
        Fitext: Fitext, PaperType_1: PaperType_1, PaperType_2: PaperType_2, PaperType_3: PaperType_3, DigitType_1: DigitType_1,
        DigitType_2: DigitType_2, DigitType_3: DigitType_3, WithBank: WithBank, WithTemp: WithTemp, IsTerm: IsTerm, ReasonCode: ReasonCode,
        ReasonText: ReasonText, Code: Code, InDate: InDate, OutDate: OutDate, DocumentDate: DocumentDate, ReceiveDate: ReceiveDate,
      }
      this.props.updateDocument(document);
    }
  };


  handleCancel = () => {
    if (this.props.document.RequestId !== undefined) {
      history.push(`/documents/${this.props.document.RequestId}`);
    }
    else {
      history.push(`/`);
    }
  }

  render() {
    const dictionaries = this.props.dictionaries;
    const isins = this.props.isins;
    const companies = this.props.companies;

    return (
      <div className="document-wrapper">

        <form onSubmit={this.handleSubmit}>

          <div className="form-container">
            <div className="input-block">
              <div style={{ position: "relative" }}>
                <div className="cancel-btn-icon"></div>
                <button type="button" onClick={this.handleCancel} className="action-btn cancel-btn cancel-btn-edit"><i className="arrow-left arrow-edit"></i><div className="innerText-edit">Відмінити</div></button>
              </div>
              <div className="date-block">

                <Input error={this.state.errorOutNum} width={250} id="outNum" label="Вихідний номер" type="text" name="OutNum" defaultValue={this.state.OutNum} onChange={this.handleChange} />

                <DatePicker width={250} id="OutDate" maxDate={Date.now()} label="Вихідна дата" data={this.state.OutDate} onChange={this.handleDate} />

                <div className="chk-container">
                  <input type="checkbox" className="chk" name="IsTerm" defaultChecked={this.state.IsTerm} onChange={this.handleChangeCheck} />
                  Терміново
                  </div>
              </div>
              <div className="pair-block">
                <Input error={this.state.errorInNum} width={250} id="inNum" label="Вхідний номер" type="text" defaultValue={this.state.InNum} name="InNum" onChange={this.handleChange} />

                <DatePicker width={250} id="InDate" maxDate={Date.now()} label="Вхідна дата" data={this.state.InDate} onChange={this.handleDate} />
              </div>
            </div>
            <div className="input-block">
              <DatePicker width={600} id="RecordDate" label="Дата обліку" data={this.state.RecordDate} onChange={this.handleDate} />

              <Input error={this.state.errorCounterPartyName} width={400} id="counterPartyName" label="Найменування" name="CounterPartyName" defaultValue={this.state.CounterPartyName}  type="text" onChange={this.handleChange} />

              <Mask error={this.state.errorCounterPartyCode} width={150} label="Код за ЄДРПОУ" mask="11111111" placeholder="XXXXXXXX" id="CounterPartyCode" size="8" defaultValue={this.state.CounterPartyCode} onChange={this.handleChange} />

              <AutoCompleteISIN error={this.state.errorIsin} width={400} items={isins} id="isin" label="Isin" name="Isin" setIsin={this.setIsin} value={this.state.Isin} onChange={this.handleIsinChange} />

              <Input width={400} error={this.state.errorFiText} placeholder="за ISIN" id="fitext" className={'input-disabled'} readOnly label="fitext" type="text" name="Найменування" value={this.state.Fitext} onChange={this.handleChange} />
            </div>

            <div className="input-block">

            <HiddenSelect error={this.state.errorReasonCode} width={600} id="ReasonCode" hiddenValue={"Code"} options={dictionaries.Item1} value={this.state.defaultReason} onChange={this.handleChange} label="Підстава" />

            <HiddenSelect width={600} id="Code" hiddenValue={"Code"} value={this.state.defaultCode} options={dictionaries.Item2} label="Стан запиту" onChange={this.handleChange} />

            <HiddenSelect error={this.state.errorRequestTypeId} width={600} id="RequestTypeId" hiddenValue={"Id"} options={dictionaries.Item3} value={this.state.defaultType} onChange={this.handleChange} label="Тип" />

            <DatePicker width={250} id="DocumentDate" maxDate={Date.now()} label="Дата запиту" data={this.state.DocumentDate} onChange={this.handleDate} />

            <DatePicker width={250} id="ReceiveDate" maxDate={Date.now()} label="Дата отримання" data={this.state.ReceiveDate} onChange={this.handleDate} />

            <AutoCompleteISSUER error={this.state.errorIssuerCode} width={600} items={companies} id="issuerCode" label="issuerCode" name="issuerCode" setIssuer={this.setIssuer} value={this.state.issuerCode} onChange={this.handleIssuerChange} />

            <Input width={250} id="issuerEdrici" label="issuerEdrici" type="text" name="IssuerEdrici" defaultValue={this.state.IssuerEdrici} onChange={this.handleChange} />

            <Input width={400} id="issuerName" label="issuerName" type="text" name="IssuerName" defaultValue={this.state.IssuerName} onChange={this.handleChange} />

            <Input width={600} id="fitext" label="Найменування" type="text" name="Fitext" defaultValue={this.state.Fitext} onChange={this.handleChange} />

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
            <button type="submit" className="submit-btn">Редагувати</button>
            {this.state.errors && <div className="validation-error-message">Виправте помилки при заповненні форми!</div>}
          </div>
          </div>
        </form>
      </div >
    );
  }
}

const mapDispatchToProps = { getDictionaries, updateDocument, getIsins, getCompanies, getDocument };

const mapStateToProps = (state) => ({ dictionaries: state.dictionaries, document: state.document, isins: state.isins, companies: state.companies });

export default connect(mapStateToProps, mapDispatchToProps)(DocumentEdit);