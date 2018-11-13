package com.engenharia.PoaAcademico.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="curso")
public class Curso {
	
	public Curso(){
		
	}
	
	public Curso(String curso, Universidade universidade,
			List<Disciplina> disciplinas) {
		this.curso = curso;
		this.universidade = universidade;
		this.disciplinas = disciplinas;
	}

	@Id
	@GeneratedValue
	private Long id;
	
	@Column(name="curso")
	private String curso;
	
	@ManyToOne
	private Universidade universidade;
	
	@OneToMany(mappedBy = "curso")
	public List<Disciplina> disciplinas;

	public Universidade getUniversidade() {
		return universidade;
	}

	public void setUniversidade(Universidade universidade) {
		this.universidade = universidade;
	}

	public String getCurso() {
		return curso;
	}

	public void setCurso(String curso) {
		this.curso = curso;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<Disciplina> getDisciplinas() {
		return disciplinas;
	}

	public void setDisciplinas(List<Disciplina> disciplinas) {
		this.disciplinas = disciplinas;
	}
	
}
