import React, { Component } from 'react';
import Home from './Home';
import NavMenu from './NavMenu';
import SideBar from './SideBar';
import DocumentAdd from './DocumentAdd';
import DocumentInfo from './DocumentInfo';
import DocumentList from './DocumentList';
import DocumentEdit from './DocumentEdit';
import {Router, Route, Switch} from 'react-router-dom'
import history from '../history';

import '../styles/App.css'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="container">
          <NavMenu />
          <SideBar />
          <div className="content-wrapper">
          <Main />
          </div>
        </div>
      </Router>
    );
  }
}

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/documents" component={DocumentList} />
    <Route exact path="/documents/new" component={DocumentAdd} />
    <Route exact path="/documents/:id" component={DocumentInfo} />
    <Route exact path="/documents/:id/edit" component={DocumentEdit} />
  </Switch>
);

export default App;
