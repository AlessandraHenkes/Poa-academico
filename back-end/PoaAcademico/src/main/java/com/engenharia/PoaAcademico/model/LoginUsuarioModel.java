/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.engenharia.PoaAcademico.model;

import lombok.Data;

/**
 *
 * @author Bruno
 */
@Data
public class LoginUsuarioModel {
	
	public LoginUsuarioModel(String token) {
		this.token = token;
	}
	
    private final String token;

	public String getToken() {
		return token;
	}   
   
}
