import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/Documents';
import Preloader from '../styles/Preloader.css';
import '../styles/datatables.css';

const $ = require('jquery');
$.DataTable = require('datatables.net');

const columns = [
  {
      title: 'Найменування',
      width: 120,
      render: (text, document) => <Link to={'document/' + document}>{text}</Link>
  },
  {
      title: 'Код за ЄДРПОУ',
      width: 120,
      data: 'counterPartyCode'
  },
  {
    title: 'Дата запиту',
    width: 70,
    data: 'documentDate'
  },
  {
    title: 'Дата отримання',
    width: 70,
    data: 'receiveDate'
  },
  {
    title: 'Емітент',
    width: 180,
    data: 'issuerName'
  },
  {
    title: 'ISIN',
    width: 70,
    data: 'isin'
  },
  ];


class GetDocuments extends Component {

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

  componentDidMount(props) {
    $(this.refs.main).DataTable({
      data: this.props.documents,
      columns,
     // processing : true,
      // serverSide : true,
      language: {
          "sProcessing": "Зачекайте...",
          "sLengthMenu": "Показати _MENU_ записів",
          "sZeroRecords": "Записи відсутні.",
          "sInfo": "Записи з _START_ по _END_ із _TOTAL_ записів",
          "sInfoEmpty": "Записи з 0 по 0 із 0 записів",
          "sInfoFiltered": "(відфільтровано з _MAX_ записів)",
          "sInfoPostFix": "",
          "sSearch": "Пошук:",
          "sUrl": "",
          "oPaginate": {
              "sFirst": "Перша",
              "sPrevious": "Попередня",
              "sNext": "Наступна",
              "sLast": "Остання"
          },
          "oAria": {
              "sSortAscending": ": активувати для сортування стовпців за зростанням",
              "sSortDescending": ": активувати для сортування стовпців за спаданням"
          }

       }
    })
  }

  componentWillUnmount() {
    $('.data-table-wrapper')
      .find('table')
      .DataTable()
      .destroy(true)
  }
  
  render() {
      return (
          <div>
              <table ref="main" />
          </div>);
  }
}

export default connect(
  state => state.documents,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(GetDocuments);
