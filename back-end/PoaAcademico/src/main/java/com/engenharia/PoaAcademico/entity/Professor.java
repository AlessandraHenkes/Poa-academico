package com.engenharia.PoaAcademico.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("P")
public class Professor extends Pessoa{
	
	public Professor(){
		
	}
	
	public Professor(String nome, Date dataNascimento, String formacao) {
		super(nome, dataNascimento);
		this.formacao = formacao;
	}

	@Column(name="formacao")
	private String formacao;

	public String getFormacao() {
		return formacao;
	}

	public void setFormacao(String formacao) {
		this.formacao = formacao;
	}
	
}
