import CONFIG from "../config";
import axios from "axios";
import UsuarioLogado from "../models/UsuarioLogado";
import LoginError from "../errors/LoginError";
import jwt_decode from "jwt-decode";

export default class LoginService {
  static login(login, senha) {
    return axios
      .post(`${CONFIG.API_URL_BASE}/public/login`, {
        login,
        senha
      })
      .then(result => {
        let token = result.data.token;
        let decoded = jwt_decode(token);

        console.log(decoded)
        const usuarioLogado = new UsuarioLogado(
          decoded.id,
          decoded.login,
          token
        );
        localStorage.setItem("idUser", decoded.id);
        localStorage.setItem("emailUser", decoded.login);
        LoginService._setUsuarioLogado(usuarioLogado);
        return usuarioLogado;
      })
      .catch(error => {
        throw new LoginError(error.error);
      });
  }

  static logout() {
    localStorage.removeItem("USUARIO_LOGADO");
    localStorage.removeItem("idUser");
    localStorage.removeItem("emailUser");
  }

  static getUsuarioLogado() {
    const saved = localStorage.getItem("USUARIO_LOGADO");

    if (!!saved) {
      const parsed = JSON.parse(saved);
      return new UsuarioLogado(parsed.id, parsed.email, parsed.token);
    }
    return null;
  }

  static _setUsuarioLogado(usuarioLogado) {
    localStorage.setItem("USUARIO_LOGADO", JSON.stringify(usuarioLogado));
  }
}