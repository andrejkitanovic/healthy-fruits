import React from 'react';
import PageLayout from './hoc/PageLayout/PageLayout'
import './App.scss';

import {Switch,Route,BrowserRouter} from 'react-router-dom'

import Pocetna from './containers/views/Pocetna/Pocetna'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <PageLayout>
        <Switch>
          <Route path="/" exact component={Pocetna} />
        </Switch>
      </PageLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
