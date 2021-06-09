/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { PatrimoniosService } from '../../services/patrimonios.service';

@Component({
  selector: 'app-patrimonio-save',
  templateUrl: './patrimonio-save.page.html',
  styleUrls: ['./patrimonio-save.page.scss'],
})
export class PatrimonioSavePage implements OnInit {
  patrimonioForm: FormGroup;
  pageTitle = '...';
  patrimonioId: string = undefined;

  constructor(
    private fb: FormBuilder, private patrimoniosService: PatrimoniosService, private navCtrl: NavController, private overlayService: OverlayService, private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.createForm();
    this.init();
  }

  init(): void {
    const patrimonioId = this.route.snapshot.paramMap.get('id');
    if (!patrimonioId) {
      this.pageTitle = 'Cadastro de Patrimonio';
      return;
    }
    this.patrimonioId = patrimonioId;
    this.pageTitle = 'Emissão de Patrimonio';
    this.patrimoniosService.get(patrimonioId)
      .pipe(take(1))
      .subscribe(({ nomeFazenda, tamanhoPatrimonio, proprietario, cep, logradouro, complemento, numero }) => {
        this.patrimonioForm.get('nomeFazenda').setValue(nomeFazenda);
        this.patrimonioForm.get('tamanhoPatrimonio').setValue(tamanhoPatrimonio);
        this.patrimonioForm.get('proprietario').setValue(proprietario);
        this.patrimonioForm.get('cep').setValue(cep);
        this.patrimonioForm.get('logradouro').setValue(logradouro);
        this.patrimonioForm.get('complemento').setValue(complemento);
        this.patrimonioForm.get('numero').setValue(numero);
      });
  }

  private createForm(): void {
    this.patrimonioForm = this.fb.group({
      nomeFazenda: ['', [Validators.required]],
      tamanhoPatrimonio: ['', [Validators.required]],
      proprietario: ['', [Validators.required]],
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
      const patrimonio = !this.patrimonioId ? await this.patrimoniosService.create(this.patrimonioForm.value) : await this.patrimoniosService.update({
        id: this.patrimonioId,
        ...this.patrimonioForm.value
      });
      this.navCtrl.navigateBack('/patrimonios');
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


