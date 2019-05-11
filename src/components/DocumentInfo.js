import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDocument, deleteDocument } from '../actions';

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
            <input type="button" value="Редагувати" className="action-btn cancel-btn" />
          </Link>
          <Link to={{ pathname: `/documents/${document.id}/edit`, state: { document: document } }}>
            <div className="info-btn-icon"></div>
            <input type="button" value="Редагувати" className="action-btn info-btn" />
          </Link>
          <div style={{ position: "relative" }}>
            <div className="delete-btn-icon"></div>
            <button className="action-btn delete-btn" type="button" onClick={() => this.props.deleteDocument(document.id)}>Видалити</button>
          </div>

        </div>
        <h2>{document.id}: {document.counterPartyName}</h2>
        <p>{document.counterPartyCode}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ document: state.document });

const mapDispatchToProps = { getDocument, deleteDocument };

export default connect(mapStateToProps, mapDispatchToProps)(DocumentInfo);