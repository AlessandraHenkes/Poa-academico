package com.engenharia.PoaAcademico.entity;import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="disciplina")
public class Disciplina {
	
	public Disciplina(String nome, int cargaHoraria) {
		this.nome = nome;
		this.cargaHoraria = cargaHoraria;
	}
	
	public Disciplina(){
		
	}

	@Id
	@GeneratedValue
	private Long id;
	
	@Column(name="nome")
	private String nome;
	
	@Column(name="carga_horaria")
	private int cargaHoraria;
        
        @ManyToOne
        @JoinColumn(name = "curso")
        private Curso curso;

        public Curso getCurso() {
            return curso;
        }

        public void setCurso(Curso curso) {
            this.curso = curso;
        }

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

	public int getCargaHoraria() {
		return cargaHoraria;
	}

	public void setCargaHoraria(int cargaHoraria) {
		this.cargaHoraria = cargaHoraria;
	}
	
	
}
