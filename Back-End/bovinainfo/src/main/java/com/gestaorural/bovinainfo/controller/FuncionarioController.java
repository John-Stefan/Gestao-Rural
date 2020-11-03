package com.gestaorural.bovinainfo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestaorural.bovinainfo.model.Funcionario;
import com.gestaorural.bovinainfo.persistencia.FuncionarioPersistencia;

@SpringBootApplication
@RestController
@RequestMapping("/funcionarios")
public class FuncionarioController {

	@Autowired
	private FuncionarioPersistencia funcionarioPersistencia;
	
	@GetMapping
	public List<Funcionario> getAll(){
		return funcionarioPersistencia.findAll();
	}
	
	@GetMapping("/{cpf}")
	public Funcionario getByCpf(@PathVariable String cpf) {
		return funcionarioPersistencia.findByCpf(cpf);
	}
	
	@GetMapping("/cpf_identico_verificacao/{cpf}")
	public boolean verificarCpfIdentico(@PathVariable String cpf) {
		return funcionarioPersistencia.existsByCpf(cpf);
	}
	
	@PostMapping
	public void post(@RequestBody Funcionario funcionario) {
		funcionarioPersistencia.save(funcionario);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		funcionarioPersistencia.deleteById(id);
	}
}
