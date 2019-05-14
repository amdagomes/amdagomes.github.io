import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
//import logo from './logo.svg';

import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
