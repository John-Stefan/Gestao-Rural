package com.gestaorural.bovinainfo.model;

import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "animal")
public class Animal {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;	

	@Column(name = "matricula", unique=true)
	private String matricula;
	
	@Column(name = "status")
	private String status;
	
	@Column(name = "raca")
	private String raca;
	
	@Column(name = "origem")
	private String origem;
	
	@Column(name = "data_nascimento")
	private Calendar data_nascimento;
	
	@Column(name = "descricao_acontecimentos")
	private String descricao_acontecimentos;
	
	@Column(name = "tipo_alimentacao")
	private String tipo_alimentacao;
	
	@OneToOne
	@JoinColumn(name = "ani_fk_pat")
	private Patrimonio patrimonio;
	
	@OneToOne
	@JoinColumn(name = "pai")
	private Animal pai;
	
	@OneToOne
	@JoinColumn(name = "mae")
	private Animal mae;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMatricula() {
		return matricula;
	}

	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getRaca() {
		return raca;
	}

	public void setRaca(String raca) {
		this.raca = raca;
	}

	public Calendar getData_nascimento() {
		return data_nascimento;
	}

	public void setData_nascimento(Calendar data_nascimento) {
		this.data_nascimento = data_nascimento;
	}

	public String getDescricao_acontecimentos() {
		return descricao_acontecimentos;
	}

	public void setDescricao_acontecimentos(String descricao_acontecimentos) {
		this.descricao_acontecimentos = descricao_acontecimentos;
	}

	public String getTipo_alimentacao() {
		return tipo_alimentacao;
	}

	public void setTipo_alimentacao(String tipo_alimentacao) {
		this.tipo_alimentacao = tipo_alimentacao;
	}

	public Patrimonio getPatrimonio() {
		return patrimonio;
	}

	public void setPatrimonio(Patrimonio patrimonio) {
		this.patrimonio = patrimonio;
	}

	public Animal getPai() {
		return pai;
	}

	public void setPai(Animal pai) {
		this.pai = pai;
	}

	public Animal getMae() {
		return mae;
	}

	public void setMae(Animal mae) {
		this.mae = mae;
	}
	
}
