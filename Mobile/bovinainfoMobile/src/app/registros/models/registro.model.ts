/* eslint-disable @typescript-eslint/quotes */
import { Pessoa } from "src/app/pessoas/models/pessoa.model";

export interface Registro {
  id: string;
  temperatura: string;
  umidade: string;
  dataProducao: string;
  funcionario: Pessoa;
}
