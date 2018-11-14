
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.engenharia.PoaAcademico.controller;

import com.engenharia.PoaAcademico.model.*;
import com.engenharia.PoaAcademico.service.LoginUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

/**
 *
 * @author Bruno
 */
@RestController
@RequestMapping("/public/login")
public class LoginController {

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public LoginUsuarioModel login(@RequestBody UsuarioModel request){
        return loginUsuarioService.logar(request);
    }

    @Autowired
    private LoginUsuarioService loginUsuarioService;
}