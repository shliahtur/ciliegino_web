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
    const id = this.props.document.id;
    const counterPartyCode = this.state.counterPartyCode ? this.state.counterPartyCode : this.props.document.counterPartyCode;
    const counterPartyName = this.state.counterPartyName ? this.state.counterPartyName : this.props.document.counterPartyName;
    const documentDate = this.state.documentDate ? this.state.documentDate : this.props.document.documentDate;
    const recieveDate = this.state.recieveDate ? this.state.recieveDate : this.props.document.recieveDate;
    const inNum = this.state.inNum ? this.state.inNum : this.props.document.inNum;
    const outNum = this.state.outNum ? this.state.outNum : this.props.document.outNum;
    const inDate = this.state.inDate ? this.state.inDate : this.props.document.inDate;
    const outDate = this.state.outDate ? this.state.outDate : this.props.document.outDate;
    const recordDate = this.state.recordDate ? this.state.outDate : this.props.document.outDate;
    const issuerCode = this.state.issuerCode ? this.state.issuerCode : this.props.document.issuerCode;
    const issuerEdrici = this.state.issuerEdrici ? this.state.issuerEdrici : this.props.document.issuerEdrici;
    const issuerName = this.state.issuerName ? this.state.issuerName : this.props.document.issuerName;
    const isin = this.state.isin ? this.state.isin : this.props.document.isin;
    const fitext = this.state.fitext ? this.state.fitext : this.props.document.fitext;
    const paperType_1 = this.state.paperType_1 ? this.state.paperType_1 : this.props.document.paperType_1;
    const paperType_2 = this.state.paperType_2 ? this.state.paperType_2 : this.props.document.paperType_2;
    const paperType_3 = this.state.paperType_3 ? this.state.paperType_3 : this.props.document.paperType_3;
    const digitType_1 = this.state.paperType_1 ? this.state.digitType_1 : this.props.document.digitType_1;
    const digitType_2 = this.state.paperType_2 ? this.state.digitType_2 : this.props.document.digitType_2;
    const digitType_3 = this.state.paperType_3 ? this.state.digitType_3 : this.props.document.digitType_3;
    const withBank = this.state.withBank ? this.state.withBank : this.props.document.withBank;
    const withTemp = this.state.withTemp ? this.state.withTemp : this.props.document.withTemp;
    const isTerm = this.state.isTerm ? this.state.isTerm : this.props.document.isTerm;
    const reasonCode = this.state.reasonCode ? this.state.reasonCode : this.props.document.reasonCode;
    const reasonText = this.state.reasonText ? this.state.reasonText : this.props.document.reasonText;
    const code = this.state.code ? this.state.code : this.props.document.code;


    const document = {
      id: id,
      counterPartyCode: counterPartyCode,
      counterPartyName: counterPartyName,
      documentDate: documentDate,
      recieveDate: recieveDate,
      inNum: inNum,
      outNum: outNum,
      unDate: inDate,
      outDate: outDate,
      recordDate: recordDate,
      issuerCode: issuerCode,
      issuerEdrici: issuerEdrici,
      issuerName: issuerName,
      isin: isin,
      fitext: fitext,
      paperType_1: paperType_1,
      paperType_2: paperType_2,
      paperType_3: paperType_3,
      digitType_1: digitType_1,
      digitType_2: digitType_2,
      digitType_3: digitType_3,
      withBank: withBank,
      withTemp: withTemp,
      isTerm: isTerm,
      reasonCode: reasonCode,
      reasonText: reasonText,
      code: code

    }
    this.props.updateDocument(document);
  };

  handleCancel = () => {
    this.props.history.push(`/documents/${this.props.document.requestId}`);
  }

  render() {
    const dictionaries = this.props.dictionaries;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        
           <Select id="doc-select" width={600} options={dictionaries.item1} label="Выпадающий список" />

          <Select id="doc-select" width={600} options={dictionaries.item2} label="Выпадающий список" />

          <Select id="doc-select" width={600} options={dictionaries.item3} label="Выпадающий список" /> 

          <Input id="RequestTypeId" label="RequestTypeId" name="RequestTypeId" defaultValue={this.props.document.requestTypeId} type="text" onChange={this.handleChange} />

          <Input id="counterPartyCode" label="CounterPartyCode" name="CounterPartyCode" defaultValue={this.props.document.counterPartyCode} type="text" onChange={this.handleChange} />

          <Input id="counterPartyName" label="CounterPartyName" name="CounterPartyName" defaultValue={this.props.document.counterPartyName} type="text" onChange={this.handleChange} />

          <DatePicker id="documentDate" label="DocumentDate" data={this.props.document.documentDate} onChange={this.handledocumentDate} />

          <DatePicker id="recieveDate" label="RecieveDate" data={this.props.document.receiveDate} onChange={this.handleRecieveDate} />

          <Input id="inNum" label="InNum" type="text" name="InNum" defaultValue={this.props.document.inNum} onChange={this.handleChange} />

          <Input id="outNum" label="OutNum" type="text" name="OutNum" defaultValue={this.state.outNum} onChange={this.handleChange} />

          <DatePicker id="inDate" label="InDate" data={this.state.inDate} onChange={this.handleInDate} />

          <DatePicker id="outDate" label="OutDate" data={this.state.outDate} onChange={this.handleOutDate} />

          <Input id="requestId" label="requestId" type="text" name="RequestId" defaultValue={this.state.requestId} onChange={this.handleChange} />

          <DatePicker id="recordDate" label="RecordDate" data={this.state.recordDate} onChange={this.handleRecordDate} />

          <Input id="issuerCode" label="issuerCode" type="text" name="IssuerCode" defaultValue={this.state.issuerCode} onChange={this.handleChange} />

          <Input id="issuerEdrici" label="issuerEdrici" type="text" name="IssuerEdrici" defaultValue={this.state.issuerEdrici} onChange={this.handleChange} />

          <Input id="issuerName" label="issuerName" type="text" name="IssuerName" defaultValue={this.state.issuerName} onChange={this.handleChange} />

          <Input id="issin" label="issin" type="text" name="Isin" defaultValue={this.state.isin} onChange={this.handleChange} />

          <Input id="fitext" label="fitext" type="text" name="Fitext" defaultValue={this.state.fitext} onChange={this.handleChange} />

          <Input id="reasonCode" label="reasonCode" type="text" name="ReasonCode" defaultValue={this.state.reasonCode} onChange={this.handleChange} />

          <Input id="reasonText" label="reasonText" type="text" name="ReasonText" defaultValue={this.state.reasonText} onChange={this.handleChange} />

          <Input id="code" label="code" type="text" name="Code" defaultValue={this.state.code} onChange={this.handleChange} />

          <button type="submit" className="btn btn-dark">Update</button>
          <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>

        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { getDictionaries, updateDocument };

const mapStateToProps = (state) => ({ document: state.document, dictionaries: state.dictionaries});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentEdit);