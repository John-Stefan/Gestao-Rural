/* eslint-disable @typescript-eslint/quotes */
import { Patrimonio } from "src/app/patrimonios/models/patrimonio.model";

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface Animal {
  id: string;
  matricula: string;
  dataNascimento: string;
  descricaoAcontecimentos: string;
  fazenda: Patrimonio;
  origem: string;
  raca: string;
  status: string;
  tipoAlimentacao: string;
}
