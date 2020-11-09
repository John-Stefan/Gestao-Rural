import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  funcionarios = [
    { id: 1, nome: "João da Silva", cpf: "21223225200", data_nascimento: "08/10/2000", telefone: "62982142356",  cep: "74256985", rua: "Rua BM50A", complemento: "Qd43 Lt92", logradouro: "Rua"},
    { id: 2, nome: "Alana da Silva", cpf: "74598632500", data_nascimento: "10/11/1985", telefone: "62985643251",  cep: "85698523", rua: "Rua RL25B", complemento: "Qd99 Lt50", logradouro: "Rua" },
    { id: 3, nome: "Matheus Marques", cpf: "30245169800", data_nascimento: "22/5/1992", telefone: "62996587421",  cep: "84365298", rua: "Rua RC5", complemento: "Qd15 Lt15", logradouro: "Rua" },
    { id: 4, nome: "Sara Marques", cpf: "01236598566", data_nascimento: "19/6/1995", telefone: "62997548632",  cep: "21365985", rua: "Rua BL85", complemento: "Qd25 Lt36", logradouro: "Rua" }
  ];

  constructor() { }

  public getContacts(): Array<{ id, nome, cpf, data_nascimento, telefone, cep, rua, complemento, logradouro }> {
    return this.funcionarios;
  }
  public createContact(contact: { id, nome, cpf, data_nascimento, telefone, cep, rua, complemento, logradouro }) {
    this.funcionarios.push(contact);
  }
}
