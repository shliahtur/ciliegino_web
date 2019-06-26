import React, { Fragment } from 'react';
import Portal from './Portal';
import { showAlert } from '../actions';
import { connect } from 'react-redux';
import '../styles/Modal.css';


class Alert extends React.Component {

  state = {
    alert: {},
    isAlert: false,
    alertMessage: undefined
  }

  componentDidUpdate(prevProps) {
    if (prevProps.alert !== this.props.alert) {
      this.setState({
        isAlert: this.props.alert.isAlert, 
        alertMessage: this.props.alert.alertMessage
      })
        if(this.state.alertMessage !== undefined){    
          setTimeout(() => this.setState({isAlert: false}), 1000);   // Auto hide if success message
        }
      
    }
  }

  closeAlert = () => {
    this.setState({
      isAlert: false
    })
  }

  render() {

    const { isAlert, alertMessage } = this.state

    return (
      <Fragment>
        {isAlert &&
          <Portal>   
            <div className="modalOverlay" onClick={this.closeAlert}>
            {alertMessage ? 
            <div className="modalWindow">
                <div className="modalHeader modal-error-header">
                  <div className="modal-circle">
                  <div className="alert-close-btn"></div>    
                  </div>
                  <div className="close-btn-white" name="times" onClick={this.closeAlert}></div>
                </div>
                <div className="modalBody">{alertMessage}</div>
                <div className="modalFooter">
                  <button className="modal-btn modal-cancel-btn" onClick={this.closeAlert}>ок</button>
                </div>
              </div>
              :
              <div className="modalWindow">
                <div className="modalHeader modal-success-header">
                <div className="modal-circle">
                  <div className="modal-checkmark"></div>  
                  </div>
                </div>
                <div className="modalBody">Успішно!</div>
              </div>
            }
            </div>
          </Portal>
        }
      </Fragment>
    );
  }
};

const mapDispatchToProps = { showAlert };

const mapStateToProps = (state) => ({ alert: state.alert });

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
