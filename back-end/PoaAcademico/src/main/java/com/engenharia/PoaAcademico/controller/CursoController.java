package com.engenharia.PoaAcademico.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.engenharia.PoaAcademico.entity.Curso;
import com.engenharia.PoaAcademico.repository.CursoRepository;

@RestController
@RequestMapping(path = "/curso")
public class CursoController {
	
	@Autowired
	public CursoRepository cursoRepository;
	
	@GetMapping(path = "/all")
    @ResponseStatus(code = HttpStatus.OK)
	public List<Curso> getAll(){
		return cursoRepository.findAll();
	}

}
