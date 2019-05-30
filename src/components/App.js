import React, { Component } from 'react';
import SideBar from './SideBar';
import DocumentAdd from './DocumentAdd';
import DocumentInfo from './DocumentInfo';
import DocumentList from './DocumentList';
import DocumentEdit from './DocumentEdit';
import {Router, Route, Switch} from 'react-router-dom'
import history from '../history';
import LoadingBar from './LoadingBar';

import '../styles/App.css'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="container">
          <LoadingBar style={{ backgroundColor: 'blue', height: '5px' }}/>
          <SideBar />
          <div className="content-wrapper">
          <Main />
          <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

const Footer = () => (
  <div style={{height: "100px"}}></div>
)

const Main = () => (
  <Switch>
    <Route exact path="/" component={DocumentList} />
    <Route exact path="/documents/new" component={DocumentAdd} />
    <Route exact path="/documents/:RequestId" component={DocumentInfo} />
    <Route exact path="/documents/:RequestId/edit" component={DocumentEdit} />
  </Switch>
);

export default App;
