package com.gestaorural.bovinainfo.model;

import java.util.Calendar;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "pessoa")
public class Pessoa {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;	

	@Column(name = "nome")
	private String nome;
	
	@Column(name = "cpf", unique=true)	
	private String cpf;
	
	@Column(name = "email", unique=true)
	private String email;	

	@Column(name = "data_nascimento")	
	@JsonFormat(pattern="dd/MM/yyyy")
	private Calendar data_nascimento;
	
	@Column(name = "telefone")
	private String telefone;	
	
	@OneToOne(cascade = CascadeType.ALL)
	private Endereco endereco;
	
	// Getters and Setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public Calendar getData_Nascimento() {
		return data_nascimento;
	}

	public void setData_Nascimento(Calendar data_Nascimento) {
		this.data_nascimento = data_Nascimento;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}
