import React from 'react';
import { connect } from 'react-redux';
import { updateDocument, getDictionaries } from '../actions';
import Input from './Input';
import DatePicker from './DatePicker';
import Select from './Select';
import HiddenSelect from './HiddenSelect';
import "../styles/Document.css";

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
  };

  componentDidMount() {
    this.props.getDictionaries();
  }
  shouldComponentUpdate(){
    return true
  }

  handleChange = (event) => {
    console.log("works!  " + event.target.name + " " + event.target.value)
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDocumentDate = (date) => {
    this.setState({
      DocumentDate: date
    });
    console.log("result: " + this.state.DocumentDate)
  }
  handleReceiveDate = (date) => {
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
   let i = !this.state[event.target.name]
    this.setState({
      [event.target.name]: i ? 1 : 0
    })
  }
  handleClick = () =>{
    console.log(this.state.WithBank +'\n'+
                 this.state.WithTemp +'\n'+
                 this.state.IsTerm )
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const RequestId = this.props.document.RequestId;
    const RequestTypeId = this.props.document.RequestTypeId;
    const CounterPartyCode = this.state.CounterPartyCode ? this.state.CounterPartyCode : this.props.document.CounterPartyCode;
    const CounterPartyName = this.state.CounterPartyName ? this.state.CounterPartyName : this.props.document.CounterPartyName;
    const DocumentDate = this.state.DocumentDate ? this.state.DocumentDate : this.props.document.DocumentDate;;
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
    const WithBank = this.state.WithBank ? this.state.WithBank : this.props.document.WithBank;
    const WithTemp = this.state.WithTemp ? this.state.WithTemp : this.props.document.WithTemp;
    const IsTerm = this.state.IsTerm ? this.state.IsTerm : this.props.document.IsTerm;
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
  };


  handleCancel = () => {
    if (this.props.document.RequestId !== undefined) {
      this.props.history.push(`/documents/${this.props.document.RequestId}`);
    }
    else {
      this.props.history.push(`/`);
    }
  }

  render() {
    const dictionaries = this.props.dictionaries;
    return (
      <div>
        <div>
        <div style={{ position: "relative" }}>
          <div className="cancel-btn-icon"></div>
          <button type="button" onClick={this.handleCancel} className="action-btn cancel-btn"><i className="arrow-left"></i><div className="innerText">Відмінити</div></button>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>

          <input type="hidden" name="RequestId" value={this.state.RequestId}/>
 
          <HiddenSelect width={600} id="ReasonCode" hiddenValue={"Code"} options={dictionaries.Item1} value={this.state.defaultReason} onChange={this.handleChange} label="ReasonText / Code"/> 
          
          <Select width={600} id="Code" value={this.state.defaultCode} options={dictionaries.Item2} label="Code (RequestState)" onChange={this.handleChange} />

          <HiddenSelect width={600}  id="RequestTypeId" hiddenValue={"Id"} options={dictionaries.Item3} value={this.state.defaultType} onChange={this.handleChange} label="RequestTypeId"/>     

          <Input width={600} id="counterPartyCode" label="CounterPartyCode" name="CounterPartyCode" defaultValue={this.state.CounterPartyCode} type="text" onChange={this.handleChange} />

          <Input width={600} id="counterPartyName" label="CounterPartyName" name="CounterPartyName" defaultValue={this.state.CounterPartyName} type="text" onChange={this.handleChange} />

          <DatePicker width={600}  id="documentDate" maxDate={Date.now()} label="DocumentDate" data={this.state.DocumentDate} onChange={this.handleDocumentDate} />

          <DatePicker width={600}  id="receiveDate" maxDate={Date.now()} label="RecieveDate" data={this.state.ReceiveDate} onChange={this.handleReceiveDate} />

          <Input width={600} id="inNum" label="InNum" type="text" name="InNum" defaultValue={this.state.InNum} onChange={this.handleChange} />

          <Input width={600} id="outNum" label="OutNum" type="text" name="OutNum" defaultValue={this.state.OutNum} onChange={this.handleChange} />

          <DatePicker width={600} id="inDate" maxDate={Date.now()} label="InDate" data={this.state.InDate} onChange={this.handleInDate} />

          <DatePicker width={600} id="outDate" maxDate={Date.now()} label="OutDate" data={this.state.OutDate} onChange={this.handleOutDate} />

          <DatePicker width={600} id="recordDate" label="RecordDate" data={this.state.RecordDate} onChange={this.handleRecordDate} />

          <Input width={600} id="issuerCode" label="issuerCode" type="text" name="IssuerCode" defaultValue={this.state.IssuerCode} onChange={this.handleChange} />

          <Input width={600} id="issuerEdrici" label="issuerEdrici" type="text" name="IssuerEdrici" defaultValue={this.state.IssuerEdrici} onChange={this.handleChange} />

          <Input width={600} id="issuerName" label="issuerName" type="text" name="IssuerName" defaultValue={this.state.IssuerName} onChange={this.handleChange} />

          <Input width={600} id="issin" label="issin" type="text" name="Isin" defaultValue={this.state.Isin} onChange={this.handleChange} />

          <Input width={600} id="fitext" label="fitext" type="text" name="Fitext" defaultValue={this.state.Fitext} onChange={this.handleChange} />
         
          <div className="chk-container">
            <label>
             <input type="checkbox" className="chk" name="IsTerm" defaultChecked={this.state.IsTerm} onChange={this.handleChangeCheck}/>
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

          <input type="button" value="ok" onClick={this.handleClick}/>
          <button type="submit" className="submit-btn">Редагувати</button>

        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { getDictionaries, updateDocument };

const mapStateToProps = (state) => ({dictionaries: state.dictionaries, document: state.document });

export default connect(mapStateToProps, mapDispatchToProps)(DocumentEdit);