package com.gestaorural.bovinainfo.model;

import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "animal")
public class Animal {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long numero;
	
	@Column(name = "status")
	private String status;
	
	@Column(name = "raca")
	private String raca;
	
	@Column(name = "data_nascimento")
	private Calendar data_nascimento;
	
	@Column(name = "descricao_acontecimentos")
	private String descricao_acontecimentos;
}
