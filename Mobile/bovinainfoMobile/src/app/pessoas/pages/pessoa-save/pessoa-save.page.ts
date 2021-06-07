/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoa-save',
  templateUrl: './pessoa-save.page.html',
  styleUrls: ['./pessoa-save.page.scss'],
})
export class PessoaSavePage implements OnInit {

  pessoaForm: FormGroup;

  constructor(private fb: FormBuilder) { }

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

  onSubmit(): void {
    console.log('Pessoa: ', this.pessoaForm.value);
  }
}
