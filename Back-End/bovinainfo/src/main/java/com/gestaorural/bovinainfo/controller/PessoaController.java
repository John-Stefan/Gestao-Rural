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

import com.gestaorural.bovinainfo.model.Pessoa;
import com.gestaorural.bovinainfo.persistencia.PessoaPersistencia;

@SpringBootApplication
@RestController
@RequestMapping("/pessoa")
public class PessoaController {

	@Autowired
	private PessoaPersistencia pessoaPersistencia;
	
	@GetMapping
	public List<Pessoa> getAll(){
		return pessoaPersistencia.findAll();
	}
	
	@GetMapping("/{cpf}")
	public Pessoa getByCpf(@PathVariable String cpf) {
		return pessoaPersistencia.findByCpf(cpf);
	}
	
	@GetMapping("/cpf_identico_verificacao/{cpf}")
	public boolean verificarCpfIdentico(@PathVariable String cpf) {
		return pessoaPersistencia.existsByCpf(cpf);
	}
	
	@PostMapping
	public void post(@RequestBody Pessoa funcionario) {			
		pessoaPersistencia.save(funcionario);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		pessoaPersistencia.deleteById(id);
	}	
}
