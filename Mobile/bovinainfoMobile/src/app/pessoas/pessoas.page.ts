import { PessoaService } from './../services/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.page.html',
  styleUrls: ['./pessoas.page.scss'],
})
export class PessoasPage implements OnInit {

  constructor(public pessoaService: PessoaService, public toastController: ToastController) { }
  pessoa: { nome, cpf, data_nascimento, telefone, email, endereco } =
    { nome: null, cpf: null, data_nascimento: "", telefone: "", email: "", endereco: { cep: null, logradouro: "", complemento: "", numero: "" } }

  ngOnInit() {
  }

  setPessoa() {
    this.pessoaService.setPessoa(this.pessoa).subscribe(async resultado => {
      this.pessoa = { nome: null, cpf: null, data_nascimento: "", telefone: "", email: "", endereco: { cep: null, logradouro: "", complemento: "", numero: "" } };

      const toast = await this.toastController.create({
        message: 'Pessoa cadastrada com sucesso!',
        duration: 2000,
        color: "success"
      });
      toast.present();
    })
  }

  async apagarFormulario() {
    this.pessoa = { nome: null, cpf: null, data_nascimento: "", telefone: "", email: "", endereco: { cep: null, logradouro: "", complemento: "", numero: "" } };
    const toast = await this.toastController.create({
      message: 'Formulario apagado com sucesso!',
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }
}
