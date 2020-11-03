package com.gestaorural.bovinainfo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "patrimonio")
public class Patrimonio {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "descricao")
	private String descricao;
	
	@Column(name = "tamanho_patrimonio")
	private double tamanho_patrimonio;
	
	@Column(name = "nome_dono")
	private String nome_dono;
}
