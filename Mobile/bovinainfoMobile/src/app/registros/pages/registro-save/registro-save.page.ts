/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { RegistrosService } from '../../services/registros.service';

@Component({
  selector: 'app-registro-save',
  templateUrl: './registro-save.page.html',
  styleUrls: ['./registro-save.page.scss'],
})
export class RegistroSavePage implements OnInit {
  registroForm: FormGroup;
  pageTitle = '...';
  registroId: string = undefined;

  constructor(
    private fb: FormBuilder, private registrosService: RegistrosService, private navCtrl: NavController, private overlayService: OverlayService, private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.createForm();
    this.init();
  }

  init(): void {
    const registroId = this.route.snapshot.paramMap.get('id');
    if (!registroId) {
      this.pageTitle = 'Inserção de Registro';
      return;
    }
    this.registroId = registroId;
    this.pageTitle = 'Emissão de Registro';
    this.registrosService.get(registroId)
      .pipe(take(1))
      .subscribe(({ temperatura, umidade, dataProducao, pessoa }) => {
        this.registroForm.get('temperatura').setValue(temperatura);
        this.registroForm.get('umidade').setValue(umidade);
        this.registroForm.get('dataProducao').setValue(dataProducao);
        this.registroForm.get('pessoa').setValue(pessoa);
      });
  }

  private createForm(): void {
    this.registroForm = this.fb.group({
      temperatura: ['', [Validators.required]],
      umidade: ['', [Validators.required]],
      dataProducao: ['', [Validators.required]],
      pessoa: ['', [Validators.required]]
    });
  }

  async onSubmit(): Promise<void> {
    const loading = await this.overlayService.loading({
      message: 'Salvando...'
    });
    try {
      const registro = !this.registroId ? await this.registrosService.create(this.registroForm.value) : await this.registrosService.update({
        id: this.registroId,
        ...this.registroForm.value
      });
      this.navCtrl.navigateBack('/registros');
    } catch (error) {
      console.log('Erro ao salvar o registro: ', error);
      await this.overlayService.toast({
        message: error.message
      });
    } finally {
      loading.dismiss();
    }
  }
}
