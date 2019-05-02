import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/Documents';



class FetchData extends Component {
 componentWillMount() {
    // This method runs when the component is first added to the page
    const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
    this.props.requestDocuments(startDateIndex);
  }

  componentWillReceiveProps(nextProps) {
    // This method runs when incoming props (e.g., route params) change
    const startDateIndex = parseInt(nextProps.match.params.startDateIndex, 10) || 0;
    this.props.requestDocuments(startDateIndex);
  }

  render() {
    return (
      <div>
        {renderDocumentsTable(this.props)}
        {renderPagination(this.props)}
      </div>
    );
  }
}

function renderDocumentsTable(props) {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Найменування</th>
          <th>Код за ЄДРПОУ</th>
          <th>Дата запиту</th>
          <th>Дата отримання</th>
          <th>Емітент</th>
          <th>Код за ЄДРПОУ</th>
          <th>ISIN</th>
          
        </tr>
      </thead>
      <tbody>
        {props.documents.map(document =>
          <tr key={document.id}>
            <td>{document.counterPartyName}</td>
            <td>{document.counterPartyCode}</td>
            <td>{document.documentDate}</td>
            <td>{document.receiveDate}</td>
            <td>{document.issuerName}</td>
            <td>{document.issuerCode}</td>
            <td>{document.isin}</td>       
          </tr>
        )}
      </tbody>
    </table>
  );
}

function renderPagination(props) {
  const prevStartDateIndex = (props.startDateIndex || 0) - 5;
  const nextStartDateIndex = (props.startDateIndex || 0) + 5;

  return <p className='clearfix text-center'>
    <Link className='btn btn-default pull-left' to={`/fetchdata/${prevStartDateIndex}`}>Попередня</Link>
    <Link className='btn btn-default pull-right' to={`/fetchdata/${nextStartDateIndex}`}>Наступна</Link>
    {props.isLoading ? <span>Завантаження...</span> : []}
  </p>;
}

export default connect(
  state => state.documents,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(FetchData);