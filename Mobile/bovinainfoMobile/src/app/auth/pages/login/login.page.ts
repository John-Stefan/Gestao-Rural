/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  authForm: FormGroup;
  configs = {
    isSignIn: true,
    action: 'Entrar',
    actionChange: 'Criar uma nova conta'
  };
  private nameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get name(): FormControl {
    return <FormControl>this.authForm.get('name');
  }

  get email(): FormControl {
    return <FormControl>this.authForm.get('email');
  }

  get password(): FormControl {
    return <FormControl>this.authForm.get('password');
  }

  public changeAuthAction(): void {
    this.configs.isSignIn = !this.configs.isSignIn;
    const { isSignIn } = this.configs;
    this.configs.action = isSignIn ? 'Entrar' : 'Cadastrar-se';
    this.configs.actionChange = isSignIn ? 'Criar uma nova conta' : 'Já tenho uma conta';
    !isSignIn
      ? this.authForm.addControl('name', this.nameControl)
      : this.authForm.removeControl('name');
  }

  public onSubmit(): void {
    console.log('AuthForm: ', this.authForm.value);
  }
}
