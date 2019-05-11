import React from 'react';
import { connect } from 'react-redux';
import { updateDocument } from '../actions';

class DocumentEdit extends React.Component {

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
    this.props.history.push(`/documents/${this.props.document.id}`);
  }

  render() {
    return (
      <div>
        <h1>Edit {this.props.document.counterPartyName}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" defaultValue={this.props.document.title} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea name="content" rows="5" defaultValue={this.props.document.content} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn btn-dark">Update</button>
            <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ document: state.document });

const mapDispatchToProps = { updateDocument };

export default connect(mapStateToProps, mapDispatchToProps)(DocumentEdit);