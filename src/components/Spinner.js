import React, { Fragment } from 'react';
import { showSpinner } from '../actions';
import { connect } from 'react-redux';
import Portal from './Portal';
import '../styles/Preloader.css';

class Spinner extends React.Component {

    state = {
        spinner: {},
        isShow: false,
    }

    componentDidUpdate(prevProps) {
        if (prevProps.spinner !== this.props.spinner) {
          this.setState({
            isShow: this.props.spinner.isShow,
          })
        }
      }

    render() {
        const { isShow } = this.state
        return (
            <Fragment>
                {isShow ?
                    <Portal>
                        <div className="preloader-overlay">
                            <div className="lds-ring preloader-window">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </Portal>
                    :
                    null}
            </Fragment>

        );
    }

};

const mapDispatchToProps = { showSpinner };

const mapStateToProps = (state) => ({ spinner: state.spinner });

export default connect(mapStateToProps, mapDispatchToProps)(Spinner);
