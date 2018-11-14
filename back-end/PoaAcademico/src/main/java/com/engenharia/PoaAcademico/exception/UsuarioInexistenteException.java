/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.engenharia.PoaAcademico.exception;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
/**
 *
 * @author Bruno
 */
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class UsuarioInexistenteException extends RuntimeException {
    public UsuarioInexistenteException() {
        super("Usuário não existente.");
    }
}

