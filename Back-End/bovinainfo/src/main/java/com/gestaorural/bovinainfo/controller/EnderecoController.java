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

import com.gestaorural.bovinainfo.model.Endereco;
import com.gestaorural.bovinainfo.persistencia.EnderecoPersistencia;

@SpringBootApplication
@RestController
@RequestMapping("/endereco")
public class EnderecoController {

	@Autowired
	private EnderecoPersistencia enderecoPersistencia;
	
	@GetMapping
	public List<Endereco> getAll(){
		return enderecoPersistencia.findAll();
	}
	
	@PostMapping
	public void post(@RequestBody Endereco endereco) {
		enderecoPersistencia.save(endereco);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		enderecoPersistencia.deleteById(id);
	}
}
