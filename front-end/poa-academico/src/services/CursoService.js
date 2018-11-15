import CONFIG from "../config";
import axios from "axios";
import CursoError from "../errors/CursoError";
import LoginService from "./LoginService";
import Curso from "../models/Curso";
// import Disciplina from '../models/Disciplina';
// import Sala from '../models/Sala';
import Universidade from "../models/Universidade";

export default class CursoService {

  static buscarTodos() {
    const usuarioLogado = LoginService.getUsuarioLogado();
    if (!!usuarioLogado) {
      return axios.get(`${CONFIG.API_URL_BASE}/curso/all`, {
          headers: {
            Authorization: `${usuarioLogado.token}`,
            "Content-Type": "application/json"
          }
        })
        .then(result => {
          return CursoService.returnCursos(result);
        }).catch(error => {
          throw new CursoError(error.response.data);
        })
    }
  }


  static returnCursos(result) {
    if (result.data.length > 0) {
      let cursos = result.data.map(curso => {
        return CursoService.mapearCurso(curso);
      });
      return cursos;
    }
    return [];
  }

  static mapearCurso(curso) {
    let universidade = new Universidade(
      curso.universidade.id,
      curso.universidade.nome,
      curso.universidade.endereco,
      0,
      new Date(curso.universidade.fundacao)
    );

    return new Curso(
      curso.id,
      curso.curso,
      universidade,
      []
    );
  }
}