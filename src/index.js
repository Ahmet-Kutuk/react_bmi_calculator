import React from 'react';
import ReactDOM from 'react-dom';
import './Sass/main.scss';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Info from './Components/info';
import Result from './Components/result';
import App from './App';
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/info" component={Info} />
      <Route  path="/result" component={Result} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


