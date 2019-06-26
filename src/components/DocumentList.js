import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDictionaries, getDocuments } from '../actions';
import '../styles/datatables.css';
import '../styles/Document.css'


const colors = [
  
  { code: "Created", color: "#45b145"},
  { code: "WaitForAccept", color: "red"},
  { code: "Accepted", color: "blue"},
  { code: "Rejected", color: "blue"},
  { code: "WaitForDate", color: "blue"},
  { code: "SendTo", color: "blue"},
  { code: "Finished", color: "blue"},
]

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

  shouldComponentUpdate() {
    return true
  }

  componentDidMount() {
    this.props.getDocuments();
    this.props.getDictionaries();

    if(this.props.documents && this.props.dictionaries){

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
          title: 'Тип',
          width: 120,
          data: 'RequestTypeId',
          render: (data) => {
            return this.props.dictionaries.Item3 ? this.props.dictionaries.Item3.filter(x => x.Id === data)[0].Name : ""
          }
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
        title: 'Вхідні номер/ дата',
        width: 70,
        data: 'InNumDate',
        render: (data) => {
          return data.substring(0, data.length - 8)
        }
      },
      {
        title: 'Вихідні номер/ дата',
        width: 70,
        data: 'OutNumDate',
        render: (data) => {
          return data.substring(0, data.length - 8)
        }
      },
      {
        title: 'ISIN',
        width: 70,
        data: 'ISIN'
      },
      {
        title: 'Стан запиту',
        width: 120,
        data: 'Code',
        render: (data) => {
          return this.props.dictionaries.Item2 ?
           `<div class="state-label" style="background: ${colors.filter(x => x.code === data)[0].color}">` + this.props.dictionaries.Item2.filter(x => x.Code === data)[0].Description + '</div>'
            : ""
        }
      },  ],
      // processing : true,
      // serverSide : true,
      processing: true,
      language: {
        "sProcessing": "<h1>...</h1>",
        "sLengthMenu": "_MENU_ Записів",
        "sZeroRecords": "...",
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
  }
  componentWillUnmount() {
    $('.dataTables_wrapper')
      .find('table')
      .DataTable()
      .destroy(true)
  }

  render() {
      return (
        <div style={{backgroundColor: "white"}}>
          <table ref="main" />
        </div>
      )
  }
}

const mapDispatchToProps = { getDictionaries, getDocuments};

const mapStateToProps = (state) => ({dictionaries: state.dictionaries, documents: state.documents });

export default connect(mapStateToProps, mapDispatchToProps)(DocumentList);