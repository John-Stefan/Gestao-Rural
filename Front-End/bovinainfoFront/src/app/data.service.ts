import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts = [
    { id: 1, name: "João da Silva", description: "Cliente Vip", email: "c001@email.com" },
    { id: 2, name: "Maria das Dores", description: "Entrou em contato pelo app", email: "c002@email.com" },
    { id: 3, name: "Pedro Pedreira", description: "Pediu cancelamento", email: "c003@email.com" },
    { id: 4, name: "Morgana Adams", description: "Deseja comprar uma casa", email: "c004@email.com" }
  ];

  constructor() { }

  public getContacts(): Array<{ id, name, description, email }> {
    return this.contacts;
  }
  public createContact(contact: { id, name, description, email }) {
    this.contacts.push(contact);
  }
}
