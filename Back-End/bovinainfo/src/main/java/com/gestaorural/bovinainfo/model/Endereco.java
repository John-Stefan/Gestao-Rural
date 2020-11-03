package com.gestaorural.bovinainfo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "endereco")
public class Endereco {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "cep", unique=true)
	private String cep;
	
	@Column(name = "rua")
	private String rua;
	
	@Column(name = "complemento")
	private String complemento;
	
	@Column(name = "numero")
	private long numero;
	
	@Column(name = "logradouro")
	private String logradouro;
}
