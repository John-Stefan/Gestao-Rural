/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { PessoasService } from '../../services/pessoas.service';

@Component({
  selector: 'app-pessoa-save',
  templateUrl: './pessoa-save.page.html',
  styleUrls: ['./pessoa-save.page.scss'],
})
export class PessoaSavePage implements OnInit {

  pessoaForm: FormGroup;

  constructor(
    private fb: FormBuilder, private pessoasService: PessoasService, private navCtrl: NavController, private overlayService: OverlayService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.pessoaForm = this.fb.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      logradouro: ['', [Validators.required]],
      complemento: [''],
      numero: ['', [Validators.required]]
    });
  }

  async onSubmit(): Promise<void> {
    const loading = await this.overlayService.loading({
      message: 'Salvando...'
    });
    try {
      const pessoa = await this.pessoasService.create(this.pessoaForm.value);
      console.log('Pessoa criada: ', this.pessoaForm.value);
      this.navCtrl.navigateBack('/pessoas');
    } catch (error) {
      console.log('Erro ao salvar pessoa: ', error);
      await this.overlayService.toast({
        message: error.message
      });
    } finally {
      loading.dismiss();
    }
  }
}
