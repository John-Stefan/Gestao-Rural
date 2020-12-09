//Persistências seria o DAO.

package com.gestaorural.bovinainfo.persistencia;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository;

import com.gestaorural.bovinainfo.model.Patrimonio; 

@Repository
public interface PatrimonioPersistencia extends JpaRepository<Patrimonio, Long>{ //JPA REPOSITORY importa tds os metodos de persistencia ao banco

	/*Patrimonio findByCpf(String cpf);
	abstract boolean existsByCpf(String cpf);
	long countPessoaFindByCpf(String cpf);*/
}
