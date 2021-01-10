import React from 'react'
import PageLayout from './hoc/PageLayout/PageLayout'
import './App.scss'

import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'

import Pocetna from './containers/views/Pocetna/Pocetna'
import Onama from './containers/views/Onama/Onama'
import Partneri from './containers/views/Partneri/Partneri'
import Kontakt from './containers/views/Kontakt/Kontakt'
import Voce from './containers/views/Voce/Voce'
import Povrce from './containers/views/Povrce/Povrce'
// import Proizvodi from './containers/views/Proizvodi/Proizvodi'
import Jabuka from './containers/views/Jabuka/Jabuka'
import AnimationEnter from './hoc/AnimationEnter/AnimationEnter'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageLayout>
          <AnimationEnter>
          <Switch>
            <Route path="/" exact component={Pocetna} />
            <Route path="/o-nama" component={Onama} />
            <Route path="/partneri" component={Partneri} />
            <Route path="/kontakt" component={Kontakt} />
            <Route path="/voce" component={Voce} />
            <Route path="/povrce" component={Povrce} />
            <Route path="/jabuke" component={Jabuka} />
            {/* <Route path="/proizvodi" component={Proizvodi} /> */}
            <Redirect to="/" />
          </Switch>
          </AnimationEnter>
        </PageLayout>
      </BrowserRouter>
    </div>
  )
}

export default App
