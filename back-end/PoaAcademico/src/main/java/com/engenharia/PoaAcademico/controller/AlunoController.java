package com.engenharia.PoaAcademico.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
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
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping(path = "/aluno")
public class AlunoController {
	
	@Autowired
	private AlunoRepository alunoRepository;
	@Autowired
	private CursoRepository cursoRepository;
	@Autowired
	private MatriculaCursoRepository matriculaCursoRepository;

	@PostMapping(path = "/create")
    public Aluno create(@RequestBody AlunoModel alunoModel){
		Aluno aluno = new Aluno(alunoModel.nome, alunoModel.cpf, alunoModel.dataNascimento, alunoModel.semestre, alunoModel.cr);
		Curso curso = cursoRepository.findById(alunoModel.idCurso).get();
		MatriculaCurso matriculaCurso;
		
		aluno = alunoRepository.save(aluno);
		matriculaCurso = new MatriculaCurso(Estado.EMCURSO, aluno, curso);
		matriculaCurso = matriculaCursoRepository.save(matriculaCurso);
		
		return aluno;
	}

    @GetMapping(path="/getAll")
    @ResponseBody
    public List<Aluno> getAll(){
        return alunoRepository.findAll();
    }
    
    @GetMapping(path="/getByNome")
    @ResponseBody
    public Aluno getByName(@RequestParam(name="nome") String nome){
        return alunoRepository.findByNome(nome);
    }
    
    @GetMapping(path="/getByNomeLike")
    @ResponseBody
    public List<Aluno> getByNomeLike(@RequestParam(name="nome") String nome){
        return alunoRepository.findByNomeLike(nome);
    }
    
}
