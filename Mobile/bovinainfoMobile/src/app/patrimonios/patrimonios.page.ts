import { PatrimonioService } from './../services/patrimonio.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
//import { PessoaService } from '../pessoas.services';

@Component({
  selector: 'app-patrimonios',
  templateUrl: './patrimonios.page.html',
  styleUrls: ['./patrimonios.page.scss'],
})
export class PatrimoniosPage implements OnInit {

  constructor(public patrimonioService: PatrimonioService, public toastController: ToastController) { }
  patrimonio: {id,pessoa,nome_fazenda, tamanho_alqueire, endereco } = { id: null,
     nome_fazenda: null, tamanho_alqueire: null, endereco: { id: null, cep: null, logradouro: "", complemento: "", numero: "" },pessoa:null
  };
  ngOnInit() {
  
  
    //this.getPessoa();
  }

  setPatrimonio() {
    this.patrimonioService.setPatrimonio(this.patrimonio).subscribe(async resultado => {
      this.patrimonio = {id: null,nome_fazenda: null, tamanho_alqueire: null, endereco: { cep: null, logradouro: "", complemento: "", numero: "" },pessoa:null};

      const toast = await this.toastController.create({
        message: 'Patrimonio cadastrado com sucesso!',
        duration: 2000,
        color: "success"
      });
      toast.present();
    })
  }

  async apagarFormulario() {
    this.patrimonio = {id:null, nome_fazenda: null, tamanho_alqueire: null, endereco: { cep: null, logradouro: "", complemento: "", numero: "" },pessoa:null };
    const toast = await this.toastController.create({
      message: 'Formulario apagado com sucesso!',
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }

}
