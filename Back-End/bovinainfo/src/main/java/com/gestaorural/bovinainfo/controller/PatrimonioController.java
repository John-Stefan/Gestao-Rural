//CONTROLER SÃO MEUS WEBSERVICES.
package com.gestaorural.bovinainfo.controller;

import java.time.format.DateTimeFormatter;
import java.util.List;
import java.time.OffsetDateTime;
import java.time.ZonedDateTime;
import java.util.GregorianCalendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestaorural.bovinainfo.model.Patrimonio;
import com.gestaorural.bovinainfo.model.Pessoa;
import com.gestaorural.bovinainfo.persistencia.PatrimonioPersistencia;
import com.gestaorural.bovinainfo.persistencia.PessoaPersistencia;

@SpringBootApplication
@RestController
@RequestMapping("/patrimonio")
public class PatrimonioController {

	@Autowired //Conecta no Spring
	private PatrimonioPersistencia patrimonioPersistencia;
	
	@GetMapping //retornar lista de JSONS de patrimonios.
	public List<Patrimonio> getall(){		
		return patrimonioPersistencia.findAll();
	}
	
	
	@PostMapping //Salva os patrimonios ou altera-lo.
	public void post(@RequestBody Patrimonio patrimonio) {//RequestBody passando tds atributos classe patrimonio como parâmetro.
		patrimonioPersistencia.save(patrimonio);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		patrimonioPersistencia.deleteById(id);
	}		
}
