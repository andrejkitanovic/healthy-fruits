import React from 'react';
import PageLayout from './hoc/PageLayout/PageLayout'
import './App.scss';

import {Switch,Route,BrowserRouter} from 'react-router-dom'

import Pocetna from './containers/views/Pocetna/Pocetna'
import Onama from './containers/views/Onama/Onama'
import Partneri from './containers/views/Partneri/Partneri'
import Kontakt from './containers/views/Kontakt/Kontakt'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <PageLayout>
        <Switch>
          <Route path="/" exact component={Pocetna} />
          <Route path="/o-nama" component={Onama} />
          <Route path="/partneri" component={Partneri} />
          <Route path="/kontakt" component={Kontakt} />
        </Switch>
      </PageLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
