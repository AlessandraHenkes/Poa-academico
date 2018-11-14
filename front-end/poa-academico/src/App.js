import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Inicial from './scenes/Inicial/Inicial';
import Login from './scenes/Login/Login';
import DashboardInstituicao from './scenes/DashboardInstituicao/DashboardInstituicao';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className='app-content'>
        <Switch>
          <Route path='/' exact component={Inicial}/>
          <Route path='/entrar' exact component={Login} />
          <Route path='/inicial' exact component={DashboardInstituicao} />
          <Route path='/cadastrar-aluno' exact component={DashboardInstituicao} />
          <Redirect to='/' />
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
