package com.engenharia.PoaAcademico.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.engenharia.PoaAcademico.entity.Aluno;
import com.engenharia.PoaAcademico.entity.Curso;
import com.engenharia.PoaAcademico.entity.Estado;
import com.engenharia.PoaAcademico.entity.MatriculaCurso;
import com.engenharia.PoaAcademico.model.AlunoModel;
import com.engenharia.PoaAcademico.repository.AlunoRepository;
import com.engenharia.PoaAcademico.repository.CursoRepository;
import com.engenharia.PoaAcademico.repository.MatriculaCursoRepository;

@RestController
@RequestMapping(path = "/aluno")
public class AlunoController {
	
	@Autowired
	private AlunoRepository alunoRepository;
	private CursoRepository cursoRepository;
	private MatriculaCursoRepository matriculaCursoRepository;

	@PostMapping(path = "/create")
    @ResponseBody
    public Aluno create(@RequestBody AlunoModel alunoModel){
		Aluno aluno = new Aluno(alunoModel.nome, alunoModel.dataNascimento, alunoModel.semestre, alunoModel.cr, null);
		Curso curso = cursoRepository.getOne(alunoModel.idCurso);
		MatriculaCurso matriculaCurso;
		
		aluno = alunoRepository.save(aluno);
		matriculaCurso = new MatriculaCurso(Estado.EMCURSO, aluno, curso);
		matriculaCurso = matriculaCursoRepository.save(matriculaCurso);
		
		return aluno;
	}
	
}
