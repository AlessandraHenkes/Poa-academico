import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavegacaoInstituicao from '../../components/NavegacaoInstituicao/NavegacaoInstituicao';
import GerenciarAlunos from '../GerenciarAlunos/GerenciarAlunos';
import CadastrarAluno from '../CadastrarAluno/CadastrarAluno';
import LoginService from '../../services/LoginService';

export default class DashboardInstituicao extends React.Component {
  constructor() {
    super();
    this.state = {
      shouldRedirectInitial: false,
    };
    this.logout = this.logout.bind(this);
  }

  _verifyUserLogged() {
    return !!LoginService.getUsuarioLogado();
  }

  componentDidMount() {
    if (!this._verifyUserLogged()) {
      this.goToInitial();
    }
  }

  logout() {
    LoginService.logout();
    this.goToInitial();
  }

  goToInitial() {
    this.setState({
      shouldRedirectInitial: true,
    });
  }

  render() {
    if (this.state.shouldRedirectInitial) {
      return <Redirect to='/' />;
    }

    return (
      <div className='dashboard-instituicao'>
        <NavegacaoInstituicao onLogout={this.logout} />
        <Switch>
          <Route path='/inicial' exact component={GerenciarAlunos} />
          <Route path='/cadastrar-aluno' exact component={CadastrarAluno} />
          <Redirect to='/inicial' />
        </Switch>
      </div>
    );
  }
}
