package com.gestaorural.bovinainfo.model;

import java.math.BigDecimal;

import javax.persistence.CascadeType;
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
@Table(name = "patrimonio")
public class Patrimonio {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;	

	@Column(name = "nome_fazenda")
	private String nome_fazenda;
	
	@Column(name = "tamanho_alqueire")
	private BigDecimal tamanho_patrimonio;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Endereco endereco;
	
	@ManyToOne
	@JoinColumn(name = "pat_fk_pes")
	private Pessoa pessoa;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome_fazenda() {
		return nome_fazenda;
	}

	public void setNome_fazenda(String nome_fazenda) {
		this.nome_fazenda = nome_fazenda;
	}

	public BigDecimal getTamanho_patrimonio() {
		return tamanho_patrimonio;
	}

	public void setTamanho_patrimonio(BigDecimal tamanho_patrimonio) {
		this.tamanho_patrimonio = tamanho_patrimonio;
	}

	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}

	public Pessoa getPessoa() {
		return pessoa;
	}

	public void setPessoa(Pessoa pessoa) {
		this.pessoa = pessoa;
	}
}
