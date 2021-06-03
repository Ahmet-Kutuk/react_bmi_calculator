import React from 'react';
import ReactDOM from 'react-dom';
import './Sass/main.scss';
import App from './App';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Info from './Components/info';
import Result from './Components/result';
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route  path="/" component={Info} />
      <Route  path="/" component={Result} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


