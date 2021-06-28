import { Pessoa } from "src/app/pessoas/models/pessoa.model";

export interface Registro {
  id: string;
  temperatura: string;
  umidade: string;
  dataProducao: string;
  //pessoa: string;
  registrada: Pessoa;
}
