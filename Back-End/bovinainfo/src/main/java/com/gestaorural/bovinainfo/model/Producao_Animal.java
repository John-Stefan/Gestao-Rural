package com.gestaorural.bovinainfo.model;

import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "producao_animal")
public class Producao_Animal {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;	

	@Column(name = "quantidade_leite")
	private double quantidade_leite;
	
	@Column(name = "inicio")
	private Calendar inicio;
	
	@Column(name = "fim")
	private Calendar fim;
	
	@Column(name = "observacoes")
	private String observacoes;
	
	@Column(name = "nota_saude")
	private short nota_saude;
	
	@Column(name = "peso")
	private double peso;
	
	@ManyToOne
	@JoinColumn(name = "proAni_fk_pro")
	private Producao producao;
	
	@OneToOne
	@JoinColumn(name = "proAni_fk_ani")
	private Animal animal;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getQuantidade_leite() {
		return quantidade_leite;
	}

	public void setQuantidade_leite(double quantidade_leite) {
		this.quantidade_leite = quantidade_leite;
	}

	public Calendar getInicio() {
		return inicio;
	}

	public void setInicio(Calendar inicio) {
		this.inicio = inicio;
	}

	public Calendar getFim() {
		return fim;
	}

	public void setFim(Calendar fim) {
		this.fim = fim;
	}

	public String getObservacoes() {
		return observacoes;
	}

	public void setObservacoes(String observacoes) {
		this.observacoes = observacoes;
	}

	public short getNota_saude() {
		return nota_saude;
	}

	public void setNota_saude(short nota_saude) {
		this.nota_saude = nota_saude;
	}

	public double getPeso() {
		return peso;
	}

	public void setPeso(double peso) {
		this.peso = peso;
	}

	public Producao getProducao() {
		return producao;
	}

	public void setProducao(Producao producao) {
		this.producao = producao;
	}

	public Animal getAnimal() {
		return animal;
	}

	public void setAnimal(Animal animal) {
		this.animal = animal;
	}
}
