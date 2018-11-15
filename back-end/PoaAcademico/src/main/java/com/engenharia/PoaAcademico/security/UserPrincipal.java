/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.engenharia.PoaAcademico.security;

import com.engenharia.PoaAcademico.entity.Usuario;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

/**
 *
 * @author Bruno
 */
@Data
@EqualsAndHashCode(of = "id")
public class UserPrincipal implements UserDetails {

    private static final String DEFAULT_ROLE = "ROLE_USER";

    private Long id;
    private String login;
    private String senha;

    private Collection<? extends GrantedAuthority> authorities;

    public UserPrincipal(Long id, String login, String senha, Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.login = login;
        this.senha = senha;
        this.authorities = authorities;
    }

    public static UserPrincipal create(Usuario usuario) {
        List<GrantedAuthority> authorities = Arrays.asList(
            new SimpleGrantedAuthority(usuario.getRole().orElse(DEFAULT_ROLE))
        );

        return new UserPrincipal(
            usuario.getId(),
            usuario.getLogin(),
            usuario.getSenha(),
            authorities
        );
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public String getPassword() {
    	return this.senha;
    }

    @Override
    public String getUsername() {
        return this.login;
    }
    
    public Long getId(){
    	return this.id;
    }
    
}