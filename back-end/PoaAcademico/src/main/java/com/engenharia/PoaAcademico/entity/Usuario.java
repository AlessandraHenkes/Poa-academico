/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.engenharia.PoaAcademico.entity;


import java.util.Optional;
import javax.persistence.*;

/**
 *
 * @author Bruno
 */
@Entity
@Table(name="usuario")
public class Usuario {
    
    @Id
    @GeneratedValue
    private Long id;
    
    @Column(name="login")
    private String login;
    
    @Column(name="senha")
    private String senha;
    
    @Transient
    private Optional<String> Role = Optional.of(new String("ROLE_USER"));

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Optional<String> getRole() {
        return Role;
    }

    public void setRole(Optional<String> Role) {
        this.Role = Role;
    }

    
  
}
