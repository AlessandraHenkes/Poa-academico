package com.engenharia.PoaAcademico;

import static org.junit.Assert.assertEquals;

import java.sql.Date;
//import java.util.Date;
import java.util.LinkedList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.engenharia.PoaAcademico.entity.Aluno;
import com.engenharia.PoaAcademico.entity.Aula;
import com.engenharia.PoaAcademico.entity.Curso;
import com.engenharia.PoaAcademico.entity.Dias;
import com.engenharia.PoaAcademico.entity.Disciplina;
import com.engenharia.PoaAcademico.entity.Professor;
import com.engenharia.PoaAcademico.entity.Sala;
import com.engenharia.PoaAcademico.entity.Universidade;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PoaAcademicoApplicationTests {
	
	@Test
	public void contextLoads() {
	}
	
	@Test
	public void create_User() {
		
		List<Sala> salasUni = new LinkedList<>();
		List<Disciplina> disciplinasCurso = new LinkedList<>();
		
		for (int i = 0; i < 4; i++) {
			if (i%2 == 0) {	
				disciplinasCurso.add(new Disciplina("Português", (i * 20 - 2)));
				salasUni.add(new Sala("A", (i * 2)));
			} else {
				disciplinasCurso.add(new Disciplina("Matemática", (i * 30)));
				salasUni.add(new Sala("B", (i * 3)));
			}
		}
				
		Universidade uni = new Universidade("Universidade de Porto Alegre", "Av. Porto Alegre, 25 - Centro", salasUni);
		
		Curso curso = new Curso("Linguagens e suas Matemáticas", uni, disciplinasCurso);
		
		Professor professor = new Professor("Arnaldo", new Date(1987, 8, 27), "Letras");
				
		List<Aula> aulas = new LinkedList<>();
		
		aulas.add(new Aula(new Date(2018, 11, 12), Dias.SEGUNDA, professor, curso, salasUni.get(0)));
		
		String nome = "Fulaninho";
		Date dataNasc = new Date(2000, 8, 27);
		int semestre = 2;
		float cR = 3;
		
		Aluno aluno = new Aluno(nome, dataNasc, semestre, cR, aulas);
		
		assertEquals("Fulaninho", aluno.getNome(), "name must be equals to 'Fulaninho'");
	}

}
