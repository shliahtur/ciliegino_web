import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Docs from './components/table/Docs';
import DocItem from './components/DocItem';
import AddNewDocument from './components/AddNewDocument';

import './App.css'
import GetDocuments from './components/GetDocuments';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    {/* <Route path='/fetch-data/:startDateIndex?' component={FetchData} /> */}
    <Route path='/fetchdata' component={GetDocuments} />
    <Route path='/datatable' component={Docs} />
    <Route path='/document/:id' component={DocItem} />
    <Route path='/newdocument' component={AddNewDocument} />
  </Layout>
);
