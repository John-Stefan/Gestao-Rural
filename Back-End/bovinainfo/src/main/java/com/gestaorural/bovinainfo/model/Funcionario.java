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

@Entity
@Table(name = "funcionario")
public class Funcionario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;	

	@Column(name = "nome")
	private String nome;
	
	@Column(name = "cpf", unique=true)	
	private String cpf;
	
	@Column(name = "data_Nascimento")
	private Calendar data_Nascimento;
	
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
		return data_Nascimento;
	}

	public void setData_Nascimento(Calendar data_Nascimento) {
		this.data_Nascimento = data_Nascimento;
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
}
