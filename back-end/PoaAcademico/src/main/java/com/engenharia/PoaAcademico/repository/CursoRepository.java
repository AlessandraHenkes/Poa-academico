package com.engenharia.PoaAcademico.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.engenharia.PoaAcademico.entity.Curso;

public interface CursoRepository extends JpaRepository<Curso, Long>{
	
}
