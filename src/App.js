import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar';
import Login from './Components/Login'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import { Home } from './Components/Home';
import { News } from './Components/News';
import Perinfo from './Components/Perinfo';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute'

function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <PrivateRoute path="/perinfo" component={Perinfo} />
        </Switch>
        <PublicRoute path="/login" component={Login} />
      </Router>
    </>
  );
}

export default App;
