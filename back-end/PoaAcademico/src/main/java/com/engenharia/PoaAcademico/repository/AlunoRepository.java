package com.engenharia.PoaAcademico.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.engenharia.PoaAcademico.entity.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {
    Aluno findByNome(String nome);
}
