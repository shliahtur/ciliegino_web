import React, { Component } from 'react';
import SideBar from './SideBar';
import DocumentAdd from './DocumentAdd';
import DocumentInfo from './DocumentInfo';
import DocumentList from './DocumentList';
import DocumentEdit from './DocumentEdit';
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history';
import LoadingBar from './LoadingBar';
import Alert from './Alert';
import Spinner from './Spinner';

import '../styles/App.css'

class App extends Component {
  render() {
    return (
      <Router history={history}>   
        <div className="container">
          <LoadingBar style={{ backgroundColor: 'blue', height: '5px' }} />
          <SideBar />
          <div className="content-wrapper">
            <Main />
            <Alert />
            <Spinner />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

const Footer = () => (
  <div style={{ height: "100px", backgroundColor: "white" }}></div>
)

const Main = () => (
  <Switch>
    <Route path="/" render={() => <DocumentList />} exact />
    <Route path="/documents/new" render={() => <DocumentAdd />} />
    <Route path="/documents/:RequestId" render={(props) => <DocumentInfo  {...props}/>} />
    <Route exact path="/edit/:RequestId/" render={() =>{return <DocumentEdit/>}} />
  </Switch>
);

export default App;
