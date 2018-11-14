import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavegacaoInstituicao from '../../components/NavegacaoInstituicao/NavegacaoInstituicao';
import GerenciarAlunos from '../GerenciarAlunos/GerenciarAlunos';
import CadastrarAluno from '../CadastrarAluno/CadastrarAluno';

export default class DashboardInstituicao extends React.Component {
  constructor() {
    super();
    this.makeLogout = this.makeLogout.bind(this);
  }

  makeLogout() {
    // TODO logout
    console.log('logout');
  }

  render() {
    return (
      <div className='dashboard-instituicao'>
        <NavegacaoInstituicao onLogout={this.makeLogout} />
        <Switch>
          <Route path='/inicial' exact component={GerenciarAlunos} />
          <Route path='/cadastrar-aluno' exact component={CadastrarAluno} />
          <Redirect to='/inicial' />
        </Switch>
      </div>
    );
  }
}
