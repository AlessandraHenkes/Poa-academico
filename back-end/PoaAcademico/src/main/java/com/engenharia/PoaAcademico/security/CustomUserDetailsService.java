/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.engenharia.PoaAcademico.security;

import com.engenharia.PoaAcademico.entity.Usuario;
import com.engenharia.PoaAcademico.repository.UsuarioRepository;
import java.util.Optional;
import java.util.function.Supplier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 *
 * @author Bruno
 */
@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String username) {
        Usuario usuario = getUser(() -> usuarioRepository.findByLogin(username));
        return UserPrincipal.create(usuario);
    }

    public UserDetails loadUserById(Long id) {
        Usuario usuario = getUser(() -> usuarioRepository.findById(id));
        return UserPrincipal.create(usuario);
    }

    private Usuario getUser(Supplier<Optional<Usuario>> supplier) {
        return supplier.get().orElseThrow(() ->
            new UsernameNotFoundException("Usuário não cadastrado")
        );
    }
}