/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.engenharia.PoaAcademico.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.engenharia.PoaAcademico.entity.Usuario;
import java.util.Optional;
/**
 *
 * @author Bruno
 */
public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
    Optional<Usuario> findByLogin(String login);
}
