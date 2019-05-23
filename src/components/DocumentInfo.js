import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDocument, deleteDocument } from '../actions';
import "../styles/DocumentInfo.css";
import Preloader from './Preloader';


class DocumentInfo extends Component {
  componentDidMount() {
    this.props.getDocument(this.props.match.params.RequestId);
  }

  render() {
    const document = this.props.document;
    if (this.props.document.RequestId !== undefined) {
    return (
      <div>
        <div className="btn-group">
          <Link to="/" className="btn btn-secondary">
            <div className="cancel-btn-icon"></div>
            <button type="button" className="action-btn cancel-btn"><i className="arrow-left"></i><div className="innerText">До списку</div></button>
          </Link>
          <Link to={{ pathname: `/documents/${document.RequestId}/edit`, state: { document: document } }}>
          <div style={{ position: "relative" }}>
            <div className="edit-btn-icon"></div>
            <input type="button" value="Редагувати" className="action-btn edit-btn" />
          </div>
          </Link>

          <div style={{ position: "relative" }}>
            <div className="delete-btn-icon" onClick={() => this.props.deleteDocument(document.RequestId)}></div>
            <button className="action-btn delete-btn" type="button" onClick={() => this.props.deleteDocument(document.RequestId)}>Видалити</button>
          </div>

        </div>
        <div className="document-info-container">
        <h2>{document.counterPartyName}</h2>
        <p><span>counterPartyCode:</span>{document.CounterPartyCode}</p>
        <p><span>receiveDate:</span>{document.ReceiveDate}</p>
        <p><span>documentDate:</span>{document.DocumentDate}</p>
        <p><span>receiveDate:</span>{document.ReceiveDate}</p>
        <p><span>inNum:</span>{document.InNum}</p>
        <p><span>outNum:</span>{document.OutNum}</p>
        <p><span>outDate:</span>{document.OutDate}</p>
        <p><span>requestId:</span>{document.RequestId}</p>
        <p><span>recordDate:</span>{document.RecordDate}</p>
        <p><span>issuerCode:</span>{document.IssuerCode}</p>
        <p><span>issuerEdrici:</span>{document.IssuerEdrici}</p>
        <p><span>issuerName:</span>{document.IssuerName}</p>
        <p><span>isin:</span>{document.Isin}</p>
        <p><span>fitext:</span>{document.Fitext}</p>
        <p><span>paperType1:</span>{document.PaperType1}</p>
        <p><span>paperType2:</span>{document.PaperType2}</p>
        <p><span>paperType3:</span>{document.PaperType3}</p>
        <p><span>digitType1:</span>{document.DigitType1}</p>
        <p><span>digitType2:</span>{document.DigitType2}</p>
        <p><span>digitType3:</span>{document.DigitType3}</p>
        <p><span>withBank:</span>{document.WithBank}</p>
        <p><span>withTemp:</span>{document.WithTemp}</p>
        <p><span>isTerm:</span>{document.IsTerm}</p>
        <p><span>reasonCode:</span>{document.ReasonCode}</p>
        <p><span>reasonCode:</span>{document.ReasonText}</p>
        <p><span>code:</span>{document.Code}</p>
        </div>
      </div>
    )
    }
      else {
      return (
        <Preloader />
      )
    }
  }
}

const mapStateToProps = (state) => ({ document: state.document });

const mapDispatchToProps = { getDocument, deleteDocument };

export default connect(mapStateToProps, mapDispatchToProps)(DocumentInfo);