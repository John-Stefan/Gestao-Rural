package com.gestaorural.bovinainfo.persistencia;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestaorural.bovinainfo.model.Endereco;

@Repository
public interface EnderecoPersistencia extends JpaRepository<Endereco, Long>{

	Endereco findById(int id);
	Endereco findByCep(String cep);
}
