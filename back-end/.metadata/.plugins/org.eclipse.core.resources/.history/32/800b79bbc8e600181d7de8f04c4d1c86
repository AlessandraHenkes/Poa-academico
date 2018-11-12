package com.engenharia.PoaAcademico.entity;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("A")
public class Aluno extends Pessoa{
	
	@Column(name="semestre")
	private int semestre;
	
	@Column(name="cr")
	private float CR;

	public int getSemestre() {
		return semestre;
	}
	
	public void setSemestre(int semestre) {
		this.semestre = semestre;
	}
	
	public float getCR() {
		return CR;
	}
	
	public void setCR(float cR) {
		CR = cR;
	}
	
}
