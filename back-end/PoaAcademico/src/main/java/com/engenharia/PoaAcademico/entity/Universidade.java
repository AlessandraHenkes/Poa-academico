package com.engenharia.PoaAcademico.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
@Table(name="universidade")
public class Universidade {
	
	public Universidade(){
		
	}
	
	public Universidade(String nome, String endereco, List<Sala> salas) {
		this.nome = nome;
		this.endereco = endereco;
		this.salas = salas;
	}

	@Id
	@GeneratedValue
	private Long id;
	
	@Column(name="nome")
	public String nome;
	
	@Column(name="endereco")
	public String endereco;
	
	@OneToMany(mappedBy = "universidade")
	public List<Sala> salas;
	
	@Temporal(TemporalType.DATE)
	@Column(name="fundacao")
	private Date fundacao;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public Date getFundacao() {
		return fundacao;
	}

	public void setFundacao(Date fundacao) {
		this.fundacao = fundacao;
	}
	
	
	
}
