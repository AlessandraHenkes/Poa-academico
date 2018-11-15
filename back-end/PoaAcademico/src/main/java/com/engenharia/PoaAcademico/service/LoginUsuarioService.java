/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.engenharia.PoaAcademico.service;
import com.engenharia.PoaAcademico.model.*;
import com.engenharia.PoaAcademico.service.CriptografadorDeAcessoService;
import com.engenharia.PoaAcademico.exception.*;
import com.engenharia.PoaAcademico.repository.UsuarioRepository;
import java.util.Objects;
import com.engenharia.PoaAcademico.entity.Usuario;
import com.engenharia.PoaAcademico.security.AuthenticationService;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Bruno
 */
@Service
public class LoginUsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private AuthenticationService authenticationService;

    @Transactional
    public LoginUsuarioModel logar(UsuarioModel requestDto){

        Optional<Usuario> usuarioSalvo = usuarioRepository.findByLogin(requestDto.login);

        Usuario usuario;

        if(usuarioSalvo.isPresent()){

            usuario = usuarioSalvo.get();

        }else{
            throw new UsuarioInexistenteException();
        }
        
        System.out.println(usuario);

        String token = authenticationService.authenticate(usuario.getLogin(), usuario.getSenha());
        return new LoginUsuarioModel(token);
    }

    private Usuario mapearDtoParaDominio(UsuarioModel requestDto){
        Usuario usuario = new Usuario();
        usuario.setLogin(requestDto.login);
        usuario.setSenha(requestDto.senha);
        return usuario;
    }
}
