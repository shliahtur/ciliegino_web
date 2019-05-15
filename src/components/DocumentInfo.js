import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDocument, deleteDocument } from '../actions';
import "../styles/DocumentInfo.css";


class DocumentInfo extends Component {
  componentDidMount() {
    this.props.getDocument(this.props.match.params.id);
  }


  render() {
    const document = this.props.document;
    return (
      <div>
        <div className="btn-group">
          <Link to="/documents" className="btn btn-secondary">
            <div className="cancel-btn-icon"></div>
            <input type="button" value="До списку" className="action-btn cancel-btn" />
          </Link>
          <Link to={{ pathname: `/documents/${document.id}/edit`, state: { document: document } }}>
            <div className="edit-btn-icon"></div>
            <input type="button" value="" className="action-btn edit-btn" />
          </Link>

          <div style={{ position: "relative" }}>
            <div className="delete-btn-icon"></div>
            <button className="action-btn delete-btn" type="button" onClick={() => this.props.deleteDocument(document.id)}></button>
          </div>

        </div>
        <div className="document-info-container">
        <h2>{document.counterPartyName}</h2>
        <p><span>documentDate:</span>{document.documentDate}</p>
        <p><span>receiveDate:</span>{document.receiveDate}</p>
        <p><span>inNum:</span>{document.inNum}</p>
        <p><span>outNum:</span>{document.outNum}</p>
        <p><span>outDate:</span>{document.outDate}</p>
        <p><span>requestId:</span>{document.requestId}</p>
        <p><span>recordDate:</span>{document.recordDate}</p>
        <p><span>issuerCode:</span>{document.issuerCode}</p>
        <p><span>issuerEdrici:</span>{document.issuerEdrici}</p>
        <p><span>issuerName:</span>{document.issuerName}</p>
        <p><span>isin:</span>{document.isin}</p>
        <p><span>fitext:</span>{document.fitext}</p>
        <p><span>paperType1:</span>{document.paperType1}</p>
        <p><span>paperType2:</span>{document.paperType2}</p>
        <p><span>paperType3:</span>{document.paperType3}</p>
        <p><span>digitType1:</span>{document.digitType1}</p>
        <p><span>digitType2:</span>{document.digitType2}</p>
        <p><span>digitType3:</span>{document.digitType3}</p>
        <p><span>withBank:</span>{document.withBank}</p>
        <p><span>withTemp:</span>{document.withTemp}</p>
        <p><span>isTerm:</span>{document.isTerm}</p>
        <p><span>reasonCode:</span>{document.reasonCode}</p>
        <p><span>reasonCode:</span>{document.reasonText}</p>
        <p><span>code:</span>{document.code}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ document: state.document });

const mapDispatchToProps = { getDocument, deleteDocument };

export default connect(mapStateToProps, mapDispatchToProps)(DocumentInfo);