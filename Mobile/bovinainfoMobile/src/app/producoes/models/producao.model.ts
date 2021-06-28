import { Animal } from 'src/app/animais/models/animal.model';

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface Producao {
  id: string;
  dataInicioProducao: string;
  dataFimProducao: string;
  registro: string;
  animalReg: Animal;
  quantidadeLeite: string;
  peso: string;
  notaAnimal: string;
}
