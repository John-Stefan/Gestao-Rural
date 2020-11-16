package com.gestaorural.bovinainfo.persistencia;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestaorural.bovinainfo.model.Pessoa;

@Repository
public interface PessoaPersistencia extends JpaRepository<Pessoa, Long>{

	Pessoa findByCpf(String cpf);
	abstract boolean existsByCpf(String cpf);
	long countPessoaFindByCpf(String cpf);
}
