/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.engenharia.PoaAcademico.service;

import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

/**
 *
 * @author Bruno
 */
@Service
public class CriptografadorDeAcessoService {
    
    public String criptografar(String chaveAcesso){
        return BCrypt.hashpw(chaveAcesso, BCrypt.gensalt());
    }

    public boolean compararChaves(String chaveAcesso, String chaveAcessoCriptografada){
        return BCrypt.checkpw(chaveAcesso, chaveAcessoCriptografada);
    }
}
