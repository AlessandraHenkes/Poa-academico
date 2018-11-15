import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '../../components/generics/Button/Button';
import Input from '../../components/generics/Input/Input';
import SelectInput from 'react-materialize/lib/Input';
import CursoService from '../../services/CursoService';
import AlunoService from '../../services/AlunoService';
import AlertaService from '../../services/AlertaService';
import { Redirect } from 'react-router-dom';
import './CadastrarAluno.scss';

export default class CadastrarAluno extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      dataNascimento: '2000-01-01',
      cpf: '',
      curso: '1',
      semestre: '1',
      cr: '',
      cursos: [],
      shouldRedirectHome: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    CursoService.buscarTodos()
      .then(result => {
        this.setState({
          cursos: result,
        });
      })
      .catch(error => {
        AlertaService.error('Ooops!', error.message);
      });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSelectChange(event, name) {
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this._create();
  }

  _create() {
    const nome = this.state.nome;
    const cpf = this.state.cpf;
    const dataNascimento = this.state.dataNascimento;
    const semestre = this.state.semestre;
    const cr = this.state.cr;
    const curso = this.state.curso;

    AlunoService.criar(nome, cpf, dataNascimento, semestre, cr, curso)
      .then(() => {
        AlertaService.success('Sucesso!', 'O aluno foi adicionado!');
        this.goToHome();
      })
      .catch(error => {
        AlertaService.error('Ooops!', error.message);
      });
  }

  renderCursos() {
    return this.state.cursos.map(curso => {
      return (
        <option value={curso.id} key={curso.id}>
          {curso.curso}
        </option>
      );
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
      <div className='cadastrar-aluno'>
        <div className='header'>
          <h3 className='title'>Alunos</h3>
          <h5 className='subtitle'>Cadastro</h5>
        </div>
        <div className='content'>
          <Paper className='cadastrar-aluno-content' elevation={1}>
            <form
              className='form-cadastrar-aluno'
              method='post'
              onSubmit={this.handleSubmit}>
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
                name='cr'
                type='number'
                required={true}
                value={this.state.cr}
                onChange={this.handleChange}
                text='Coeficiente de rendimento'
              />
              <SelectInput
                type='select'
                label='Curso'
                value={this.state.curso}
                onChange={event => this.handleSelectChange(event, 'curso')}>
                {this.renderCursos()}
              </SelectInput>

              <SelectInput
                type='select'
                label='Semestre'
                value={this.state.semestre}
                onChange={event => this.handleSelectChange(event, 'semestre')}>
                <option value='1'>1º Semestre</option>
                <option value='2'>2º Semestre</option>
              </SelectInput>
              <div className='cadastrar-aluno-button'>
                <Button
                  primary={true}
                  type='submit'
                  size='big'
                  text='Cadastrar'
                />
              </div>
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}
