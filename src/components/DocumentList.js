import React, { Component } from 'react';
import { connect } from 'react-redux';
import Preloader from './Preloader';
import '../styles/datatables.css';

const $ = require('jquery');
$.DataTable = require('datatables.net');

const columns = [
  {
    title: 'Найменування',
    width: 120,
    data: 'counterPartyName',
    render: (data) => {
      data = '<a href="/documents/' + 4 + '">' + data + '</a>';
       return data;
     },
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
    title: 'ISIN',
    width: 70,
    data: 'isin'
  },
];

class DocumentList extends Component {

  componentDidMount(props) {
    $(this.refs.main).DataTable({
      data: this.props.documents,
      columns,
      // processing : true,
      // serverSide : true,
      processing: true,
      language: {
        "sProcessing": "<h1>...</h1>",
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
  shouldComponentUpdate(){
    return true;
}

  render() {

    if (this.props.documents.length) {
      return (
        <div>
          <table ref="main" />
        </div>
      )
    } else {
      return (
        <Preloader />
      )
    }
  }
}


const mapStateToProps = (state) => ({ documents: state.documents });

export default connect(mapStateToProps)(DocumentList);