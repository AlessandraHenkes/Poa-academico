package com.engenharia.PoaAcademico.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.engenharia.PoaAcademico.entity.Curso;

public interface CursoRepository extends JpaRepository<Curso, Long>{
	Optional<Curso> findById(Long id);
	
}
