import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth.service';
import { AuthProvider } from 'src/app/core/services/auth.types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading: boolean; //Variavel para definir quando exibir o loading
  authForm: FormGroup;
  authProviders = AuthProvider;
  configs = {
    isSignIn: true,
    action: 'Entrar',
    actionChange: 'Criar uma nova conta'
  };

  private nameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  constructor(private authService: AuthService, private fb: FormBuilder, private messageService: MessageService, private router: Router, private activatedRoute: ActivatedRoute) { }

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

  changeAuthAction(): void {
    this.configs.isSignIn = !this.configs.isSignIn;
    const { isSignIn } = this.configs;
    this.configs.action = isSignIn ? 'Entrar' : 'Criar uma nova conta';
    this.configs.actionChange = isSignIn ? 'Criar uma conta' : 'Ja tenho uma conta';
    !isSignIn
      ? this.authForm.addControl('name', this.nameControl)
      : this.authForm.removeControl('name');
  }

  async onSubmit(provider: AuthProvider): Promise<void> {
    this.loading = true;
    try {
      const credentials = await this.authService.authenticate({
        isSignIn: this.configs.isSignIn,
        user: this.authForm.value,
        provider
      });
      this.router.navigate([this.activatedRoute.snapshot.queryParamMap.get('redirect') || '/pessoas']);
    } catch (e) {
      console.log('Auth error: ', e);
      await this.messageService.add({ severity: 'error', summary: 'Erro',  detail: 'Oh não ocorreu um erro, possivelmente suas credenciais estão invalidas, verifique e tente novamente' });
    } finally {
      this.loading = false;
    }
  }
}
