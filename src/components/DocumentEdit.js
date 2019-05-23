import React from 'react';
import { connect } from 'react-redux';
import { updateDocument, getDictionaries } from '../actions';
import Input from './Input';
import DatePicker from './DatePicker';
import Select from './Select';

class DocumentEdit extends React.Component {

  state = {
    dictionaries: []
  }

  componentDidMount() {
    this.props.getDictionaries();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const RequestId = this.props.document.RequestId;
    const CounterPartyCode = this.state.CounterPartyCode ? this.state.CounterPartyCode : this.props.document.CounterPartyCode;
    const CounterPartyName = this.state.CounterPartyName ? this.state.CounterPartyName : this.props.document.CounterPartyName;
    const DocumentDate = this.state.DocumentDate ? this.state.DocumentDate : this.props.document.DocumentDate;;
    const RecieveDate = this.state.RecieveDate ? this.state.RecieveDate : this.props.document.RecieveDate;
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

    const document = {RequestId: RequestId, CounterPartyCode: CounterPartyCode, CounterPartyName: CounterPartyName, InNum: InNum,
    OutNum: OutNum, RecordDate: RecordDate, IssuerCode: IssuerCode, IssuerEdrici: IssuerEdrici, IssuerName: IssuerName, Isin: Isin,
    Fitext: Fitext, PaperType_1: PaperType_1, PaperType_2: PaperType_2, PaperType_3: PaperType_3, DigitType_1: DigitType_1,
    DigitType_2: DigitType_2, DigitType_3: DigitType_3, WithBank: WithBank, WithTemp: WithTemp, IsTerm: IsTerm, ReasonCode: ReasonCode,
    ReasonText: ReasonText, Code: Code, InDate: InDate, OutDate: OutDate, DocumentDate: DocumentDate, RecieveDate: RecieveDate, }
  
      this.props.updateDocument(document);
  };

  handleCancel = () => {
    this.props.history.push(`/documents/${this.props.document.RequestId}`);
  }

  render() {
    const dictionaries = this.props.dictionaries;
    return (
      <div>
        <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Назад</button>
                
         <form onSubmit={this.handleSubmit}>
        
          <Select id="doc-select" width={600} defaultValue={this.props.document.CounterPartyName} options={dictionaries.Item1} label="Выпадающий список" />

          <Select id="doc-select" width={600} defaultValue={this.props.document.Code} options={dictionaries.Item2} label="Code (RequestStateId)" />

          <Select id="doc-select" width={600} defaultValue={this.props.document.CounterPartyName} options={dictionaries.Item3} label="Выпадающий список" /> 

          <Input id="RequestTypeId" label="RequestTypeId" name="RequestTypeId" defaultValue={this.props.document.RequestTypeId} type="text" onChange={this.handleChange} />

          <Input id="counterPartyCode" label="CounterPartyCode" name="CounterPartyCode" defaultValue={this.props.document.CounterPartyCode} type="text" onChange={this.handleChange} />

          <Input id="counterPartyName" label="CounterPartyName" name="CounterPartyName" defaultValue={this.props.document.CounterPartyName} type="text" onChange={this.handleChange} />

          <DatePicker id="documentDate" maxDate={Date.now()} label="DocumentDate" data={this.props.document.documentDate ? this.props.document.documentDate : Date.now()} onChange={this.handledocumentDate} />  

          <DatePicker id="recieveDate" maxDate={Date.now()} label="RecieveDate" data={this.props.document.receiveDate} onChange={this.handleRecieveDate} />  

          <Input id="inNum" label="InNum" type="text" name="InNum" defaultValue={this.props.document.InNum} onChange={this.handleChange} />

          <Input id="outNum" label="OutNum" type="text" name="OutNum" defaultValue={this.props.document.OutNum} onChange={this.handleChange} />

          <DatePicker id="inDate" maxDate={Date.now()} label="InDate" data={this.state.inDate} onChange={this.handleInDate} />

          <DatePicker id="outDate" maxDate={Date.now()} label="OutDate" data={this.state.outDate} onChange={this.handleOutDate} />  

          <Input id="requestId" label="requestId" type="text" name="RequestId" defaultValue={this.props.document.RequestId} onChange={this.handleChange} />

          <DatePicker id="recordDate" label="RecordDate" data={this.state.recordDate} onChange={this.handleRecordDate} /> 

          <Input id="issuerCode" label="issuerCode" type="text" name="IssuerCode" defaultValue={this.props.document.IssuerCode} onChange={this.handleChange} />

          <Input id="issuerEdrici" label="issuerEdrici" type="text" name="IssuerEdrici" defaultValue={this.props.document.IssuerEdrici} onChange={this.handleChange} />

          <Input id="issuerName" label="issuerName" type="text" name="IssuerName" defaultValue={this.props.document.IssuerName} onChange={this.handleChange} />

          <Input id="issin" label="issin" type="text" name="Isin" defaultValue={this.props.document.Isin} onChange={this.handleChange} />

          <Input id="fitext" label="fitext" type="text" name="Fitext" defaultValue={this.props.document.Fitext} onChange={this.handleChange} />

          <Input id="reasonCode" label="reasonCode" type="text" name="ReasonCode" defaultValue={this.props.document.ReasonCode} onChange={this.handleChange} />

          <Input id="reasonText" label="reasonText" type="text" name="ReasonText" defaultValue={this.props.document.ReasonText} onChange={this.handleChange} />

          <Input id="code" label="code" type="text" name="Code" defaultValue={this.props.document.Code} onChange={this.handleChange} />

          <button type="submit" className="btn btn-dark">Оновити</button>
  

        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { getDictionaries, updateDocument };

const mapStateToProps = (state) => ({ document: state.document, dictionaries: state.dictionaries});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentEdit);