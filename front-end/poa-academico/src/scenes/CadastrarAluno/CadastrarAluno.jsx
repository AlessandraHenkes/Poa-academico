import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '../../components/generics/Button/Button';
import Input from '../../components/generics/Input/Input';
import './CadastrarAluno.scss';

export default class CadastrarAluno extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      dataNascimento: '',
      cpf: '',
      curso: '',
      semestre: '',
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
      <div className='cadastrar-aluno'>
        <div className='header'>
          <h3 className='title'>Alunos</h3>
          <h5 className='subtitle'>Cadastro</h5>
        </div>
        <div className='content'>
          <Paper className='cadastrar-aluno-content' elevation={1}>
            <form className='form-cadastrar-aluno'>
              <Input
                name='nome'
                type='text'
                required={true}
                value={this.state.nome}
                onChange={this.handleChange}
                text='Nome'
              />
              <Input
                name='dataNascimento'
                type='date'
                required={true}
                value={this.state.dataNascimento}
                onChange={this.handleChange}
                text='Data de nascimento'
              />
              <Input
                name='cpf'
                type='text'
                required={true}
                value={this.state.cpf}
                onChange={this.handleChange}
                text='CPF'
              />
              <Input
                name='curso'
                type='text'
                required={true}
                value={this.state.curso}
                onChange={this.handleChange}
                text='Curso'
              />
              <Input
                name='semestre'
                type='text'
                required={true}
                value={this.state.semestre}
                onChange={this.handleChange}
                text='Semestre'
              />
              <div className='cadastrar-aluno-button'>
                <Button primary={true} type='submit' size='big' text='Cadastrar' />
              </div>
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}
