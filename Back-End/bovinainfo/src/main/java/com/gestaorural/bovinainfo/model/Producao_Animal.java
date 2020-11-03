package com.gestaorural.bovinainfo.model;

import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "producao_animal")
public class Producao_Animal {

	@Column(name = "id")
	private int id;
	
	@Column(name = "quantidade")
	private double quantidade;
	
	@Column(name = "inicio")
	private Calendar inicio;
	
	@Column(name = "fim")
	private Calendar fim;
}
