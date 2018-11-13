package com.engenharia.PoaAcademico.entity;

import javax.persistence.*;

@Entity
@Table(name="matricula_curso")
public class MatriculaCurso {
	
	public MatriculaCurso(){
		
	}
	
	public MatriculaCurso(Estado estado, Aluno aluno, Curso curso) {
		this.estado = estado;
		this.aluno = aluno;
		this.curso = curso;
	}

	@Id
	@GeneratedValue
	private Long id;
	
	@Column(name = "estado")
	@Enumerated(EnumType.STRING)
	public Estado estado;
	
	@ManyToOne
	public Aluno aluno;
	
	@ManyToOne
	public Curso curso;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Estado getEstado() {
		return estado;
	}

	public void setEstado(Estado estado) {
		this.estado = estado;
	}
	
	
	
}
