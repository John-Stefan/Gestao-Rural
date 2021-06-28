/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/ban-types */
export interface Funcionario {
  id: string;
  nome: string;
  cpf: string;
  data_Nascimento: string;
  email: string;
  telefone: string;
  endereco: {
    cep: string;
    logradouro: string;
    complemento: string;
    numero: string;
  }
}
