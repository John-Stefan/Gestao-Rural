import { Pessoa } from "src/app/pessoas/models/pessoa.model";

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface Patrimonio {
  id: string;
  nomeFazenda: string;
  tamanhoPatrimonio: string;
  proprietario: Pessoa;
  cep: string;
  logradouro: string;
  complemento: string;
  numero: string;
}
