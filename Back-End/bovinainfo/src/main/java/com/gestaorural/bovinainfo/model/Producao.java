package com.gestaorural.bovinainfo.model;

import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "producao")
public class Producao {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;	

	@Column(name = "data")
	private Calendar data;
	
	@Column(name = "temperatura")
	private int temperatura;
	
	@Column(name = "umidade")
	private int umidade;
	
	@ManyToOne
	@JoinColumn(name = "pro_fk_pes")
	private Pessoa pessoa;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Calendar getData() {
		return data;
	}

	public void setData(Calendar data) {
		this.data = data;
	}

	public int getTemperatura() {
		return temperatura;
	}

	public void setTemperatura(int temperatura) {
		this.temperatura = temperatura;
	}

	public int getUmidade() {
		return umidade;
	}

	public void setUmidade(int umidade) {
		this.umidade = umidade;
	}

	public Pessoa getPessoa() {
		return pessoa;
	}

	public void setPessoa(Pessoa pessoa) {
		this.pessoa = pessoa;
	}
}

