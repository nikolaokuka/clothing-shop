import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'

import './App.css'

const HatsPage = () => (
  <div>Hats Page</div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App