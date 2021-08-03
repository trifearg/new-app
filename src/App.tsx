import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Home  from './Components/Home';
import News from './Components/News';
import AddArticle from './Components/AddArticle';
import EditArticle from './Components/EditArticle';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <NaviBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/edit/:id" component={EditArticle} />
          <Route path="/add" component={AddArticle} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
