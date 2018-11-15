import CONFIG from "../config";
import axios from "axios";
import LoginService from './LoginService';
import Aluno from "../models/Aluno";
import AlunoError from "../errors/AlunoError";

export default class AlunoService {
    static criar(nome, cpf, dataNascimento, semestre, cr, idCurso) {
        const usuarioLogado = LoginService.getUsuarioLogado();
        if (!!usuarioLogado) {
            return axios
                .post(`${CONFIG.API_URL_BASE}/aluno/create`, {
                    nome,
                    cpf,
                    dataNascimento,
                    semestre,
                    cr,
                    idCurso
                }, {
                    headers: {
                        Authorization: `${usuarioLogado.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .catch(error => {
                    throw new AlunoError(error.response.data);
                });
        }
    }

    static buscarPorNome(nome) {
        const usuarioLogado = LoginService.getUsuarioLogado();
        if (!!usuarioLogado) {
            return axios
                .get(`${CONFIG.API_URL_BASE}/aluno/getByNome`, {
                    headers: {
                        Authorization: `${usuarioLogado.token}`,
                        "Content-Type": "application/json"
                    },
                    params: {
                        'nome': nome
                    }
                })
                .then(result => {
                    return new Aluno(result.data.id, result.data.nome, result.data.cpf, result.data.dataNascimento, result.data.semestre);
                })
                .catch(error => {
                    throw new AlunoError(error.response.data);
                });
        }
    }

    static buscarTodos() {
        const usuarioLogado = LoginService.getUsuarioLogado();
        if (!!usuarioLogado) {
            return axios
                .get(`${CONFIG.API_URL_BASE}/aluno/getAll`, {
                    headers: {
                        Authorization: `${usuarioLogado.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(result => {
                    let alunos = result.data.map(aluno => {
                        return new Aluno(aluno.id, aluno.nome, aluno.cpf, aluno.dataNascimento, aluno.semestre);
                    });

                    return alunos;
                })
                .catch(error => {
                    throw new AlunoError(error.response.data);
                });
        }
    }
}