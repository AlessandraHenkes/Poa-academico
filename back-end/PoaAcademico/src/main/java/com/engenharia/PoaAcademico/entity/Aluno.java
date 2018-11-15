package com.engenharia.PoaAcademico.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.*;

@Entity
@DiscriminatorValue("A")
public class Aluno extends Pessoa{
	
	public Aluno(){
		
	}

	public Aluno(String nome, String cpf, Date dataNascimento, int semestre, float cR) {
		super(nome, cpf, dataNascimento);
		this.semestre = semestre;
		this.CR = cR;
	}

	@Column(name="semestre")
	private int semestre;
	
	@Column(name="cr")
	private float CR;
	
	@ManyToMany
	@JoinTable(name = "matricula_aula",
	joinColumns = @JoinColumn(name = "cod_aluno"),
	inverseJoinColumns = @JoinColumn(name = "cod_aula"))
	private List<Aula> aulas;

	public int getSemestre() {
		return semestre;
	}
	
	public void setSemestre(int semestre) {
		this.semestre = semestre;
	}
	
	public float getCR() {
		return CR;
	}
	
}
