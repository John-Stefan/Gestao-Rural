/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { PessoasService } from '../../services/pessoas.service';

@Component({
  selector: 'app-pessoa-save',
  templateUrl: './pessoa-save.page.html',
  styleUrls: ['./pessoa-save.page.scss'],
})
export class PessoaSavePage implements OnInit {
  pessoaForm: FormGroup;
  pageTitle = '...';
  pessoaId: string = undefined;

  constructor(
    private fb: FormBuilder, private pessoasService: PessoasService, private navCtrl: NavController, private overlayService: OverlayService, private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.createForm();
    this.init();
  }

  init(): void {
    const pessoaId = this.route.snapshot.paramMap.get('id');
    if (!pessoaId || pessoaId === 'patrimonio' || pessoaId === 'registro') {
      this.pageTitle = 'Cadastro de Pessoa';
      return;
    }
    this.pessoaId = pessoaId;
    this.pageTitle = 'Emissão de Pessoa';
    this.pessoasService.get(pessoaId)
      .pipe(take(1))
      .subscribe(({ nome, cpf, dataNascimento, email, telefone, cep, logradouro, complemento, numero }) => {
        this.pessoaForm.get('nome').setValue(nome);
        this.pessoaForm.get('cpf').setValue(cpf);
        this.pessoaForm.get('dataNascimento').setValue(dataNascimento);
        this.pessoaForm.get('email').setValue(email);
        this.pessoaForm.get('telefone').setValue(telefone);
        this.pessoaForm.get('cep').setValue(cep);
        this.pessoaForm.get('logradouro').setValue(logradouro);
        this.pessoaForm.get('complemento').setValue(complemento);
        this.pessoaForm.get('numero').setValue(numero);
      });
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
    const pessoaId = this.route.snapshot.paramMap.get('id');
    const loading = await this.overlayService.loading({
      message: 'Salvando...'
    });
    try {
      const pessoa = !this.pessoaId ? await this.pessoasService.create(this.pessoaForm.value) : await this.pessoasService.update({
        id: this.pessoaId,
        ...this.pessoaForm.value
      });
      if (pessoaId === 'patrimonio') {
        this.navCtrl.navigateBack('/patrimonios/create');
      }
      else if (pessoaId === 'registro') {
        this.navCtrl.navigateBack('/registros/create');
      }
      else {
        this.navCtrl.navigateBack('/pessoas');
      }
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
