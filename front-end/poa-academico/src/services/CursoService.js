import CONFIG from "../config";
import axios from "axios";
import CursoError from "../errors/CursoError";
import LoginService from "./LoginService";
import Curso from "../models/Curso";
import Disciplina from '../models/Disciplina';
import Sala from '../models/Sala';
import Universidade from "../models/Universidade";

export default class CursoService {

  static buscarTodos() {
    const usuarioLogado = LoginService.getUsuarioLogado();
    if (!!usuarioLogado) {
      return axios.get(`${CONFIG.API_URL_BASE}/curso/all`)
        .then(result => {
          console.log(result);
          debugger
        }).catch(error => {
          throw new CursoError(error.response.data);
        })
    }
  }
}