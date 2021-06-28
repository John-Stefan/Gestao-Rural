/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/member-delimiter-style */
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FuncionariosService } from '../../services/funcionarios.service';

@Component({
  selector: 'app-funcionario-save',
  templateUrl: './funcionario-save.page.html',
  styleUrls: ['./funcionario-save.page.scss'],
})
export class FuncionarioSavePage implements OnInit {
  pageTitle = '...';
  funcionarioId: string = undefined;
  constructor(public funcionariosService: FuncionariosService, public toastController: ToastController, private route: ActivatedRoute) { }
  funcionario: { nome, cpf, data_nascimento, telefone, email, endereco } =
    { nome: null, cpf: null, data_nascimento: "", telefone: "", email: "", endereco: { cep: null, logradouro: "", complemento: "", numero: "" } }

  ngOnInit() {
    const funcionarioId = this.route.snapshot.paramMap.get('id');
    if (!funcionarioId) {
      this.pageTitle = 'Cadastro de Funcionario';
    } else {
      this.funcionarioId = funcionarioId;
      this.pageTitle = 'Emissão de Funcionario';
    }
  }

  setPessoa() {
    this.funcionariosService.setPessoa(this.funcionario).subscribe(async resultado => {
      this.funcionario = { nome: null, cpf: null, data_nascimento: "", telefone: "", email: "", endereco: { cep: null, logradouro: "", complemento: "", numero: "" } };

      const toast = await this.toastController.create({
        message: 'Funcionario cadastrado com sucesso!',
        duration: 2000,
        color: "success"
      });
      toast.present();
    })
  }

  async apagarFormulario() {
    this.funcionario = { nome: null, cpf: null, data_nascimento: "", telefone: "", email: "", endereco: { cep: null, logradouro: "", complemento: "", numero: "" } };
    const toast = await this.toastController.create({
      message: 'Formulario apagado com sucesso!',
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }
}
