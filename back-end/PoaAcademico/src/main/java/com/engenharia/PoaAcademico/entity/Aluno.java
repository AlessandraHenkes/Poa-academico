package com.engenharia.PoaAcademico.entity;

import java.sql.Date;
import java.util.List;

import javax.persistence.*;

@Entity
@DiscriminatorValue("A")
public class Aluno extends Pessoa{
	
	public Aluno(){
		
	}

	public Aluno(String nome, Date dataNascimento, int semestre,
			float cR, List<Aula> aulas) {
		super( nome, dataNascimento);
		this.semestre = semestre;
		CR = cR;
		this.aulas = aulas;
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
