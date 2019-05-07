import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



const BASE_PATH = '/api/RequestData/RegRequestsSelectById/';

class DocumentInfo extends Component {

  state = {
    searchQuery: '',
    result: {},
  }

  componentDidMount() {
    const {id} = this.props.match.params
    const { searchQuery, hitsPerPage, page } = this.state;
    this.fetchData(searchQuery, hitsPerPage, page);
  }

  fetchData = (searchQuery, id) => {
    fetch(`${BASE_PATH}${'/1'}`)
      .then(res => res.json())
      .then(result => this.setNews(result))
      .catch(error => error);
  }
  
  setNews = result => {
    this.setState({ result });
  }

  render() {
    const {result} = this.state;
    let document = result;
    return (
      <React.Fragment>
        <Link to='/datatable'><button>До списку</button></Link>
              <p>Найменування: {document.counterPartyName}</p>
              <p>Код за ЄДРПОУ: {document.counterPartyCode}</p>
              <p>Дата запиту: {document.documentDate}</p>
              <p>Дата отримання: {document.receiveDate}</p>
              <p>Емітент: {document.issuerName}</p>
              <p>Код за ЄДРПОУ: {document.issuerCode}</p>
              <p>ISIN: {document.isin}</p>

        </React.Fragment>
    );
  }
}

export default DocumentInfo;