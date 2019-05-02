import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import Docs from './components/table/Docs1';

import './App.css'

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    {/* <Route path='/fetch-data/:startDateIndex?' component={FetchData} /> */}
    <Route path='/fetchdata' component={FetchData} />
    <Route path='/datatable' component={Docs} />
    
  </Layout>
);
