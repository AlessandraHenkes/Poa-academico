package com.engenharia.PoaAcademico.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="sala")
public class Sala {

	public Sala(){
		
	}
	
	public Sala(String bloco, int numero) {
		this.bloco = bloco;
		this.numero = numero;
	}



	@Id
	@GeneratedValue
	private Long id;
	
	@Column(name="bloco")
	private String bloco;
	
	@Column(name="numero")
	private int numero;
        
        @ManyToOne
        @JoinColumn(name = "universidade")
        private Universidade universidade;

        public Universidade getUniversidade() {
            return universidade;
        }

        public void setUniversidade(Universidade universidade) {
            this.universidade = universidade;
        }
        
        
        
        
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getBloco() {
		return bloco;
	}

	public void setBloco(String bloco) {
		this.bloco = bloco;
	}

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}
	
}
