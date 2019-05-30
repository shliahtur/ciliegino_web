import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/datatables.css';

const $ = require('jquery');
$.DataTable = require('datatables.net');

function reloadTableData(documents){
  const table = $('.dataTables_wrapper').find('table').DataTable()
  table.clear()
  table.rows.add(documents)
  table.draw()
}

class DocumentList extends Component {

  componentDidUpdate(){
    reloadTableData(this.props.documents)
  }

  componentDidMount() {
    $(this.refs.main).DataTable({  
      data: this.props.documents,  
      columns: [   
       {
        title: 'Найменування',
        width: 120,
        data: 'CounterPartyName',
        render: (data) => {
           return '<a href="/documents/' + this.props.documents.filter(el => el.CounterPartyName === data)[0].RequestId + '">' + data + '</a>';
         },
      },
      {
        title: 'Код за ЄДРПОУ',
        width: 120,
        data: 'CounterPartyCode'
      },
      {
        title: 'Дата запиту',
        width: 70,
        data: 'DocumentDate',
        render: (data) => {
          return data.substring(0, 10)
        }
      },
      {
        title: 'Дата отримання',
        width: 70,
        data: 'ReceiveDate',
        render: (data) => {
          return data.substring(0, 10)
        }
      },
      {
        title: 'ISIN',
        width: 70,
        data: 'ISIN'
      }],
      // processing : true,
      // serverSide : true,
      processing: true,
      language: {
        "sProcessing": "<h1>...</h1>",
        "sLengthMenu": "_MENU_ Записів",
        "sZeroRecords": "",
        "sInfo": "Записи з _START_ по _END_ із _TOTAL_ записів",
        "sInfoEmpty": "Записи з 0 по 0 із 0 записів",
        "sInfoFiltered": "(відфільтровано з _MAX_ записів)",
        "sInfoPostFix": "",
        "sSearch": "",
        "searchPlaceholder": "Пошук",
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
    $('.dataTables_wrapper')
      .find('table')
      .DataTable()
      .destroy(true)
  }

  shouldComponentUpdate(nextProps) {
    return true
  }


  render() {
      return (
        <div>
          <table ref="main" />
        </div>
      )
  }
}


const mapStateToProps = (state) => ({ documents: state.documents });

export default connect(mapStateToProps)(DocumentList);