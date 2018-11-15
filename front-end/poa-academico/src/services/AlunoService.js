import CONFIG from "../config";
import axios from "axios";
import LoginService from './LoginService';
import Aluno from "../models/Aluno";
import AlunoError from "../errors/AlunoError";

export default class AlunoService {
    static criar(nome, dataNascimento, semestre, idCurso) {
        const usuarioLogado = LoginService.getUsuarioLogado();
        if (!!usuarioLogado) {
            return axios
                .post(`${CONFIG.API_URL_BASE}/aluno/create`, {
                    nome,
                    dataNascimento,
                    semestre,
                    idCurso
                })
                .then(result => {
                    console.log(result);
                    debugger
                })
                .catch(error => {
                    throw new AlunoError(error.response.data);
                });
        }
    }
}