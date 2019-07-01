import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDocument, deleteDocument, getDictionaries,
         getCorpActions, addCorpAction, getAccountsByRequest,
         updateParticipantsByRequest }
from '../actions';
import Preloader from './Preloader';
import Modal from './Modal';

import "../styles/Document.css";

class DocumentInfo extends Component {

  state = {
    isOpenDelete: false,
    isOpenCorpAction: false,
    dictionaries: [],
    selectedCorpAction: '',
    corpActions: this.props.corpActions[0],
  }

  openCorpAction = () => {
    this.setState({ isOpenCorpAction: true })
  }

  selectCorpAction = (event, reference) => {
    let selectedRow = event.target.parentNode;
    let rows = selectedRow.parentNode.children;
    
    for (let i = 0; i < rows.length; i++) {
      rows[i].className = ""
    }
    selectedRow.className = "selectedCorpAction"
    this.setState({
        selectedCorpAction: reference
     })
  }

  handleCorpActionSubmit = (event) => {
    event.preventDefault();
      this.setState({
        isPreloader: true,
        isOpenCorpAction: false,
      })
      let upload = {
        RequestId: this.props.document.RequestId,
        CARef: this.state.selectedCorpAction
      }
      this.props.addCorpAction(upload);
  };

  openDeleteModal = () => {
    this.setState({ isOpenDelete: true });
  }

  handleSubmit = () => {
    this.setState({ isOpenDelete: false });
    this.props.deleteDocument(this.props.document.RequestId)
  }

  handleCancel = (e) => {
    if (e.target.className === 'modalOverlay' || e.target.className === 'close-btn' || e.target.className === 'modal-btn modal-cancel-btn') {
      this.setState({ isOpenDelete: false, isOpenCorpAction: false });
    }
  }

  getAccountsByRequest = () => {
    this.props.getAccountsByRequest(this.props.match.params.RequestId);
  }

  updateParticipantsByRequest = () => {
    this.props.updateParticipantsByRequest(this.props.match.params.RequestId);
  }

  componentDidMount() {
    this.props.getDictionaries();
    this.props.getDocument(this.props.match.params.RequestId);
    this.props.getCorpActions(this.props.match.params.RequestId);
  }

  render() {
    const document = this.props.document;
    const dictionaries = this.props.dictionaries;
    const corpActions = this.props.corpActions;

    if (this.props.document.RequestId !== undefined) {
      return (
        <React.Fragment>
          <div style={{ padding: "40px" }}>
            <div className="btn-group">
              <Link to="/" className="btn btn-secondary">
                <div style={{ position: "relative" }}>
                  <div className="cancel-btn-icon"></div>
                  <button type="button" className="action-btn cancel-btn"><i className="arrow-left"></i><div className="innerText">До списку</div></button>
                </div>
              </Link>
              <Link to={{ pathname: `/edit/${document.RequestId}`, state: { document: document } }}>
                <div style={{ position: "relative" }}>
                  <div className="edit-btn-icon"></div>
                  <input type="button" value="Редагувати" className="action-btn edit-btn" />
                </div>
              </Link>
              <div style={{ position: "relative" }}>
                <div className="delete-btn-icon" tabIndex="-1" onClick={this.openDeleteModal}></div>
                <button className="action-btn delete-btn" type="button" onClick={this.openDeleteModal}>Видалити</button>
              </div>
              <div style={{ position: "relative" }}>
                <button className="action-btn corpAction-btn" type="button" onClick={this.openCorpAction}>CorpActions</button>
              </div>
              <div style={{ position: "relative" }}>
                <div className="pdf-btn-icon" tabIndex="-1" ></div>
                <button className="action-btn pdf-btn" type="button">PDF-експорт</button>
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
                  <div className="info-item-value">{document.OutDate ? document.OutDate.substring(0, 10) : ''}</div>
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
                  {
                    document.IsTerm ? <div className="bool-block"><div className="bool-radio" style={{ background: "#f73e3e" }}></div><div>Терміново</div></div> :
                      <div className="bool-block"><div className="bool-radio" style={{ background: "#cccccc" }}></div><div>Не терміново</div></div>
                  }
                  {
                    document.WithBank ? <div className="bool-block"><div className="bool-radio" style={{ background: "#5bc129" }}></div><div>З реквізитами</div></div> :
                      <div className="bool-block"><div className="bool-radio" style={{ background: "#cccccc" }}></div><div>Без реквізитів</div></div>
                  }
                  {
                    document.WithTemp ? <div className="bool-block"><div className="bool-radio" style={{ background: "#5bc129" }}></div><div>За ТГС</div></div> :
                      <div className="bool-block"><div className="bool-radio" style={{ background: "#cccccc" }}></div><div>Не за ТГС</div></div>
                  }
                </div>
              </div>
            </div>
          </div>

          <Modal className="modal-form"
            title="Ви впевнені?"
            isOpen={this.state.isOpenDelete}
            onCancel={this.handleCancel}
            onSubmit={this.handleSubmit}
            withDeleteBtns={true}
          >
          </Modal>
         
          <Modal className="modal-form"
            title="Corp Actions"
            isOpen={this.state.isOpenCorpAction}
            onCancel={this.handleCancel}
            onSubmit={this.handleSubmit}
            width={900}
            children={
              <form onSubmit={this.handleCorpActionSubmit}>
              <table className="corpTable">
                <thead>
                  <tr>
                    <th>Id події</th>
                    <th>Reference події</th>
                    <th>Тип події</th>
                    <th>Дата події</th>
                    <th>ISIN Код ЦП</th>
                  </tr>
                </thead>
                <tbody>
                  {corpActions.length > 0 && corpActions.map(el => {
                   return (
                      <tr key={el.EVENT_ID} onClick={(event) => this.selectCorpAction(event, el.EVENT_REFERENCE)}>
                        <td>{el.EVENT_ID}</td>
                        <td>{el.EVENT_REFERENCE}</td>
                        <td>{el.EVENT_TYPE}</td>
                        <td>{el.CORPACT_RECORD_DATE}</td>
                        <td>{el.ISIN_CODE}</td>  
                      </tr>                
                     )
                   })
                  }
                </tbody>
              </table>
              <div className="corp-command-btns">
              <button type="button" className="corp-btn corp-action-accounts" onClick={this.getAccountsByRequest}>Оновити власників</button>
              <button type="button" className="corp-btn corp-action-participants" onClick={this.updateParticipantsByRequest}>Оновити ДУ</button>
              </div>
              <button className="corp-btn corp-action-submit">Отправить</button>
              </form>
            }
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

const mapStateToProps = (state) => ({ document: state.document, dictionaries: state.dictionaries, corpActions: state.corpActions });

const mapDispatchToProps = { getDocument, deleteDocument, getDictionaries, getCorpActions, addCorpAction, getAccountsByRequest, updateParticipantsByRequest };

export default connect(mapStateToProps, mapDispatchToProps)(DocumentInfo);