import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDocument, deleteDocument, getDictionaries } from '../actions';
import Preloader from './Preloader';
import Modal from './Modal';

import "../styles/Document.css";

class DocumentInfo extends Component {

  state = {
    isOpen: false,
    dictionaries: []
  }

  openModal = () => {
    this.setState({ isOpen: true });
  }

  handleSubmit = () => {
    this.setState({ isOpen: false });
    this.props.deleteDocument(this.props.document.RequestId)
  }

  handleCancel = (e) => {
    if (e.target.className === 'modalOverlay' || e.target.className === 'close-btn') {
      this.setState({ isOpen: false });
    }
  }

  componentDidMount() {
    this.props.getDictionaries();
    this.props.getDocument(this.props.match.params.RequestId);
  }

  render() {
    const document = this.props.document;
    const dictionaries = this.props.dictionaries;

    if (this.props.document.RequestId !== undefined) {
      return (
        <React.Fragment>

          <div>
            <div className="btn-group">
              <Link to="/" className="btn btn-secondary">
                <div style={{ position: "relative" }}>
                  <div className="cancel-btn-icon"></div>
                  <button type="button" className="action-btn cancel-btn"><i className="arrow-left"></i><div className="innerText">До списку</div></button>
                </div>
              </Link>
              <Link to={{ pathname: `/documents/${document.RequestId}/edit`, state: { document: document } }}>
                <div style={{ position: "relative" }}>
                  <div className="edit-btn-icon"></div>
                  <input type="button" value="Редагувати" className="action-btn edit-btn" />
                </div>
              </Link>
              <div style={{ position: "relative" }}>
                <div className="delete-btn-icon" tabIndex="-1" onClick={this.openModal}></div>
                <button className="action-btn delete-btn" type="button" onClick={this.openModal}>Видалити</button>
              </div>
            </div>

            <div className="document-info-container">
              <div className="info-block">
                <div className="info-item">
                  <div className="info-label">Найменування</div>
                  <div className="info-item-value">{document.CounterPartyName}</div>
                </div>
                <div className="info-item">
                  <div className="info-label">Код за ЄДРПОУ</div>
                  <div className="info-item-value">{document.CounterPartyCode}</div>
                </div>
              </div>
              <div className="info-block-header">Контрагент</div>
              <div className="info-block">
                <div className="info-item">
                  <div className="info-label">Тип</div>
                  <div className="info-item-value">{dictionaries.Item3 ? dictionaries.Item3.filter(x => x.Id === document.RequestTypeId)[0].Description : ""}</div>
                </div>
                <div className="info-item">
                  <div className="info-label">Підстава</div>
                  <div className="info-item-value">{dictionaries.Item1 ? dictionaries.Item1.filter(x => x.Code === document.ReasonCode)[0].Description : ""}</div>
                </div>
                <div className="info-item">
                  <div className="info-label">Стан запиту</div>
                  <div className="info-item-value">{dictionaries.Item2 ? dictionaries.Item2.filter(x => x.Code === document.Code)[0].Description : ""}</div>
                </div>
                <div className="info-item">
                  <div className="info-label">Дата запиту</div>
                  <div className="info-item-value">{document.DocumentDate.substring(0, 10)}</div>
                </div>
                <div className="info-item">
                  <div className="info-label">Дата отримання</div>
                  <div className="info-item-value">{document.ReceiveDate.substring(0, 10)}</div>
                </div>
                <div className="info-item">
                  <div className="info-label">Вхідний номер</div>
                  <div className="info-item-value">{document.InNum}</div>
                </div>
                <div className="info-item">
                  <div className="info-label">Вихідний номер</div>
                  <div className="info-item-value">{document.OutNum}</div>
                </div>
              </div>
              <div className="info-block-header">Емітент</div>
              <div className="info-block">
                <div className="info-item">
                  <div className="info-label">Вихідна дата</div>
                  <div className="info-item-value">{document.OutDate.substring(0, 10)}</div>
                </div>
                <div className="info-item">
                  <div className="info-label">Дата обліку</div>
                  <div className="info-item-value">{document.RecordDate.substring(0, 10)}</div>
                </div>
                <div className="info-item">
                  <div className="info-label">Код за ЄДРПОУ</div>
                  <div className="info-item-value">{document.IssuerCode}</div>
                </div>
                <div className="info-item">
                  <div className="info-label">IssuerEdrici</div>
                  <div className="info-item-value">{document.IssuerEdrici}</div>
                </div>
                <div className="info-item">
                  <div className="info-label">IssuerName</div>
                  <div className="info-item-value">{document.IssuerName}</div>
                </div>
                <div className="info-item">
                  <div className="info-label">ISIN</div>
                  <div className="info-item-value">{document.Isin}</div>
                </div>
                <div className="info-item">
                  <div className="info-label">Найменування</div>
                  <div className="info-item-value">{document.Fitext}</div>
                </div>
                {document.PaperType1 ? <div className="info-item">
                  <div className="info-label">PaperType1</div>
                  <div className="info-item-value">{document.PaperType1}</div>
                </div> : ""}
                {document.PaperType2 ? <div className="info-item">
                  <div className="info-label">PaperType2</div>
                  <div className="info-item-value">{document.PaperType2}</div>
                </div> : ""}
                {document.PaperType3 ? <div className="info-item">
                  <div className="info-label">PaperType3</div>
                  <div className="info-item-value">{document.PaperType3}</div>
                </div> : ""}
                {document.DigitType1 ? <div className="info-item">
                  <div className="info-label">DigitType1</div>
                  <div className="info-item-value">{document.DigitType1}</div>
                </div> : ""}
                {document.DigitType2 ? <div className="info-item">
                  <div className="info-label">DigitType2</div>
                  <div className="info-item-value">{document.DigitType2}</div>
                </div> : ""}
                {document.DigitType3 ? <div className="info-item">
                  <div className="info-label">DigitType3</div>
                  <div className="info-item-value">{document.DigitType3}</div>
                </div> : ""}
                <div className="bool-btn-block">  
                  <div className="info-item">
                    {
                      document.IsTerm ? <div className="bool-btn" style={{ background: "#f73e3e", color: "white" }}>Терміново</div> :
                        <div className="bool-btn">Не терміново</div>
                    }
                    </div>
                     <div className="info-item">
                    {
                      document.WithBank ? <div className="bool-btn" style={{ background: "#f73e3e", color: "white" }}>З реквізитами</div> :
                        <div className="bool-btn">Без реквізитів</div>
                    }
                    </div>
                     <div className="info-item">
                    {
                      document.WithTemp ? <div className="bool-btn" style={{ background: "#f73e3e", color: "white" }}>За ТГС</div> :
                        <div className="bool-btn">Не за ТГС</div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Modal className="modal-form"
            title="Ви впевнені?"
            isOpen={this.state.isOpen}
            onCancel={this.handleCancel}
            onSubmit={this.handleSubmit}
          >
          </Modal>
        </React.Fragment>
      )
    } else {
      return (
        <Preloader />
      )
    }
  }
}

const mapStateToProps = (state) => ({ document: state.document, dictionaries: state.dictionaries });

const mapDispatchToProps = { getDocument, deleteDocument, getDictionaries };

export default connect(mapStateToProps, mapDispatchToProps)(DocumentInfo);