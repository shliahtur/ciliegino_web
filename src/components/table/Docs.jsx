import React, { Component } from 'react';
import Row from './rows/rows';
import Input from './input/input';
import Select from './select/select';
import Pagination from './pagination/pagination';
import {connect} from 'react-redux';


const BASE_PATH = 'api/RequestData/RegRequestsSelect';
const SEARCH_PATH = '/search';
const SEARCH_PARAM = 'query=';
const PAGE_HITS = 'hitsPerPage=';
const PAGE_PARAM = 'page=';

const HITS = [
  {
    value: 10,
    label: 10,
  },
  {
    value: 20,
    label: 20,
  },
  {
    value: 40,
    label: 40,
  },
  {
    value: 50,
    label: 50,
  }
]

class Docs extends Component {
  state = {
    searchQuery: '',
    result: {},
    hitsPerPage: 20,
    page: 0,
    direction: {
      price_usd: 'asc',
    }
  }

  // componentDidMount() {
  //   const { searchQuery, hitsPerPage, page } = this.state;
  //   this.fetchData(searchQuery, hitsPerPage, page);
  // }



  handleInputChange = ({ target: { value } }) => {
    this.setState({
      searchQuery: value
    })
  }

  getSearch = ({ key }) => {
    if(key === 'Enter') {   /// TODO: on KeyUp
      const { searchQuery, hitsPerPage } = this.state;
      this.setState({
        page: 0,
      })
      this.fetchData(searchQuery, hitsPerPage, 0);
    }
  }

  setNews = result => {
    this.setState({ result });
  }

  // sortBy = ({key}) => {
  //   this.setState({
  //      result: this.result.sort( (a, b) => (
  //       this.state.direction[key] === 'asc'
  //         ? parseFloat(a[key]) - parseFloat(b[key])
  //         : parseFloat(b[key]) - parseFloat(a[key]) 
  //     )),
  //     direction: {
  //       [key]: this.state.direction[key] === 'asc'
  //         ? 'desc'
  //         : 'asc'
  //     }
  //   })
  // }
  handleHitsChange = ({ target: { value } }) => {
    const { searchQuery } = this.state;

    this.setState({
      hitsPerPage: + value,
      page: 0
    }, () => {
      this.fetchData(searchQuery, this.state.hitsPerPage, 0);
    })
  }

  handlePageChange = ({ target }) => {
    const btnType = target.getAttribute('data-name');
    let { page } = this.state;

    if(!isNaN(btnType)) {
      this.updatePage(+btnType);
    } else {
      switch (btnType)
       {
        case 'next':
          this.updatePage(page + 1);
          break;
        case 'prev':
          this.updatePage(page - 1);
          break;
        default: return null;
          }
    }
  }

  updatePage = (number) => {
    const { searchQuery, hitsPerPage } = this.state;
    this.setState({
      page: number,
    }, () => {
      this.fetchData(searchQuery, hitsPerPage, number);
    })
  }

  render() {
    const { searchQuery, result, hitsPerPage } = this.state;
    const { hits = [], page, nbPages } = result;

    return (
      <React.Fragment>
      <div className="sorting-wrapper">
        <Input onKeyPress={this.getSearch} onChange={this.handleInputChange} value={searchQuery} />
        <Select options={HITS} handleChange={this.handleHitsChange} value={hitsPerPage} />
      </div>
        <table className="mainTable">
        <thead>
          <tr>
        {/* <th><button onClick={() => this.sortBy('author')} class="sort-button">Статьи</button></th> */}
        <th>Поинтсы</th>
        <th>Поинтсы</th>
        <th>Комментарии</th>
        <th>Дата</th>
        <th>Ссылка</th>
        </tr>
        </thead>
            <tbody>
          {hits.map(({ author, created_at, num_comments, objectID, title, points, url }) =>
            <Row
              key={objectID}
              author={author}
              created_at={created_at}
              num_comments={num_comments}
              title={title}
              points={points}
              url={url}
            />
          )}
          </tbody>
          </table>
          <Pagination
          onClick={this.handlePageChange}
          page={page}
          lastPage={nbPages}
        />
 </React.Fragment>
    );
  }
}

//export default Docs;

export default connect(state => ({
  tasks: state.docs,
}))(Docs);