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

@Entity //Entity já faz com q a tabela seja criada automaticamente.
@Table(name = "patrimonio")
public class Patrimonio {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //Campo ID gerado automaticamente.
	private long id;	

	@Column(name = "nome_fazenda")
	private String nome_fazenda;
	
	@Column(name = "tamanho_alqueire")
	private BigDecimal tamanho_alqueire;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Endereco endereco;
	
	@ManyToOne
	@JoinColumn(name = "pat_fk_pes")
	private Pessoa pessoa;
	
	//getters e setters.
	public long getId() { //Verificar pq não está long.
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome_fazenda() {
		return nome_fazenda;
	}

	public void setNome_fazenda(String nome_fazenda) {
		this.nome_fazenda = nome_fazenda;
	}

	public BigDecimal getTamanho_alqueire() {
		return tamanho_alqueire;
	}

	public void setTamanho_alqueire(BigDecimal tamanho_alqueire) {
		this.tamanho_alqueire = tamanho_alqueire;
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
