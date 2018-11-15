import React from 'react';
import Input from '../../components/generics/Input/Input';
import Button from '../../components/generics/Button/Button';
import { Link } from 'react-router-dom';
import './GerenciarAlunos.scss';

export default class GerenciarAlunos extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
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

  render() {
    return (
      <div className='gerenciar-alunos'>
        <div className='gerenciar-alunos-content'>
          <div className='header'>
            <h3 className='title'>Alunos</h3>
            <h5 className='subtitle'>Pesquisar, cadastrar e editar</h5>
          </div>

          <div className='pesquisar-alunos'>
            <Input
              name='name'
              type='text'
              required={true}
              value={this.state.name}
              onChange={this.handleChange}
              text='Nome'
            />
            <Button
              primary={true}
              type='submit'
              size='medium'
              text='Pesquisar'
            />
          </div>

          <div className='button-cadastrar-aluno'>
            <Link to='/cadastrar-aluno'>
              <Button
                primary={true}
                type='button'
                size='big'
                text='Cadastrar aluno'
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
