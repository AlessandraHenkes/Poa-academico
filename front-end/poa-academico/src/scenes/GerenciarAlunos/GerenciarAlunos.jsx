import React from 'react';
import Input from '../../components/generics/Input/Input';
import Button from '../../components/generics/Button/Button';
import { Link } from 'react-router-dom';
import AlertaService from '../../services/AlertaService';
import AlunoService from '../../services/AlunoService';
import './GerenciarAlunos.scss';

export default class GerenciarAlunos extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      aluno: {
        nome: '',
        cpf: '',
        semestre: '',
      },
      alunos: [],
      shouldRenderAluno: false,
      shouldRenderAlunos: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.showAlunos = this.showAlunos.bind(this);
    this.clearAlunos = this.clearAlunos.bind(this);
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
    this._search();
  }

  handleReset() {
    this.setState({
      nome: '',
      shouldRenderAluno: false,
    });
  }

  _search() {
    const nome = this.state.nome;

    AlunoService.buscarPorNome(nome)
      .then(result => {
        this.setState({
          aluno: result,
          shouldRenderAluno: true,
        });
      })
      .catch(error => {
        AlertaService.error('Ooops!', error.message);
      });
  }

  _renderAlunoSearch() {
    return this.state.shouldRenderAluno ? (
      <div className='aluno-content'>
        <div className='campos'>
          <span>Nome</span>
          <span>CPF</span>
          <span>Semestre</span>
        </div>
        {this._renderAluno(this.state.aluno)}
      </div>
    ) : null;
  }

  _renderAluno(aluno) {
    return (
      <div className='aluno' key={aluno.id}>
        <span>{aluno.nome}</span>
        <span>{aluno.cpf}</span>
        <span>{aluno.semestre}</span>
      </div>
    );
  }

  showAlunos() {
    AlunoService.buscarTodos()
      .then(result => {
        this.setState({
          alunos: result,
          shouldRenderAlunos: true,
        });
      })
      .catch(error => {
        AlertaService.error('Ooops!', error.message);
      });
  }

  clearAlunos() {
    this.setState({
      alunos: [],
      shouldRenderAlunos: false,
    });
  }

  _renderAlunosContent() {
    return this.state.shouldRenderAlunos ? (
      <div className='alunos'>
        <div className='aluno-content'>
          <div className='campos'>
            <span>Nome</span>
            <span>CPF</span>
            <span>Semestre</span>
          </div>
          {this._renderAlunos()}
        </div>
        <Button
          primary={false}
          type='button'
          size='medium'
          text='Limpar'
          onClick={this.clearAlunos}
        />
      </div>
    ) : null;
  }

  _renderAlunos() {
    return this.state.alunos.map(aluno => {
      return this._renderAluno(aluno);
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
          <form
            method='post'
            onSubmit={this.handleSubmit}
            onReset={this.handleReset}>
            <div className='pesquisar-alunos'>
              <Input
                name='nome'
                type='text'
                required={true}
                value={this.state.nome}
                onChange={this.handleChange}
                text='Nome'
              />
              {this._renderAlunoSearch()}
              <div className='buttons-control'>
                <Button
                  primary={true}
                  type='submit'
                  size='big'
                  text='Pesquisar'
                />
                <Button primary={false} type='reset' size='big' text='Limpar' />
              </div>
            </div>
          </form>
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
          <div className='button-listar-alunos'>
            <Button
              primary={true}
              type='button'
              size='big'
              text='Listar alunos'
              onClick={this.showAlunos}
            />
          </div>
          {this._renderAlunosContent()}
        </div>
      </div>
    );
  }
}
