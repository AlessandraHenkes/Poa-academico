import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '../../components/generics/Button/Button';
import Input from '../../components/generics/Input/Input';
import NavbarPoaAcademico from '../../components/NavbarPoaAcademico/NavbarPoaAcademico';
import LoginService from '../../services/LoginService';
import './Login.scss';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  doLogin() {
    LoginService.login(this.state.email, this.state.password)
      .then(result => {
        console.log('funfou');
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className='login'>
        <NavbarPoaAcademico />
        <Paper className='login-content' elevation={1}>
          <form className='form-login' onSubmit={this.doLogin()}>
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
              name='password'
              type='password'
              required={true}
              value={this.state.password}
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
