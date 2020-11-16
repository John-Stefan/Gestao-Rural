package com.gestaorural.bovinainfo.persistencia;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestaorural.bovinainfo.model.Funcionario;

@Repository
public interface FuncionarioPersistencia extends JpaRepository<Funcionario, Long>{

	Funcionario findByCpf(String cpf);
	abstract boolean existsByCpf(String cpf);
	long countFuncionarioFindByCpf(String cpf);
}
