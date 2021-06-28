/* eslint-disable @typescript-eslint/quotes */
import { Animal } from "src/app/animais/models/animal.model";
import { Registro } from "src/app/registros/models/registro.model";

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface Producao {
  id: string;
  dataInicioProducao: string;
  dataFimProducao: string;
  registro: Registro;
  animal: Animal;
  quantidadeLeite: string;
  peso: string;
  notaAnimal: string;
}
