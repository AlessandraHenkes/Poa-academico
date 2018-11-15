import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '../../components/generics/Button/Button';
import Input from '../../components/generics/Input/Input';
import NavbarPoaAcademico from '../../components/NavbarPoaAcademico/NavbarPoaAcademico';
import LoginService from '../../services/LoginService';
import AlertaService from '../../services/AlertaService';
import { Redirect } from 'react-router-dom';
import './Login.scss';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = this.getInitialState();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getInitialState() {
    return {
      email: '',
      senha: '',
      shouldRedirectHome: false,
    };
  }

  _verifyUserLogged() {
    return !!LoginService.getUsuarioLogado();
  }

  componentDidMount() {
    if (this._verifyUserLogged()) {
      this.goToHome();
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this._login();
  }

  _login() {
    const email = this.state.email;
    const senha = this.state.senha;

    LoginService.login(email, senha)
      .then(() => {
        this.goToHome();
      })
      .catch(error => {
        AlertaService.error('Ooops!', error.message);
      });
  }

  goToHome() {
    this.setState({
      shouldRedirectHome: true,
    });
  }

  render() {
    if (this.state.shouldRedirectHome) {
      return <Redirect to='/inicial' />;
    }

    return (
      <div className='login'>
        <NavbarPoaAcademico />
        <Paper className='login-content' elevation={1}>
          <form className='form-login' onSubmit={this.handleSubmit} method='post'>
            <h3 className='login-title'>Entre em sua conta</h3>
            <Input
              name='email'
              type='email'
              required={true}
              value={this.state.email}
              onChange={this.handleChange}
              text='E-mail'
            />
            <Input
              name='senha'
              type='password'
              required={true}
              value={this.state.senha}
              onChange={this.handleChange}
              text='Senha'
            />
            <div className='login-button'>
              <Button primary={true} type='submit' size='big' text='Entrar' />
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}
