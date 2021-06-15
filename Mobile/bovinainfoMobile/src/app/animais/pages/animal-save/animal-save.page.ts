/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { AnimaisService } from '../../services/animais.service';

@Component({
  selector: 'app-animal-save',
  templateUrl: './animal-save.page.html',
  styleUrls: ['./animal-save.page.scss'],
})
export class AnimalSavePage implements OnInit {
  animalForm: FormGroup;
  pageTitle = '...';
  animalId: string=undefined;

  constructor(
    private fb: FormBuilder, private animaisService: AnimaisService, private navCtrl: NavController, private overlayService: OverlayService, private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.createForm();
    this.init();
  }

  init(): void {
    const animalId = this.route.snapshot.paramMap.get('id');
    if (!animalId) {
      this.pageTitle = 'Cadastro de Animal';
      return;
    }
    this.animalId = animalId;
    this.pageTitle = 'Emissão de Animal';
    this.animaisService.get(animalId)
      .pipe(take(1))
      .subscribe(({ matricula,dataNascimento, descricaoAcontecimentos, origem, raca, status, tipoAlimentacao }) => {
        this.animalForm.get('matricula').setValue(matricula);
        this.animalForm.get('descricaoAcontecimentos').setValue(descricaoAcontecimentos);
        this.animalForm.get('dataNascimento').setValue(dataNascimento);

        this.animalForm.get('origem').setValue(origem);
        this.animalForm.get('origem').setValidators([Validators.required]);
        this.animalForm.controls['origem'].updateValueAndValidity();

        this.animalForm.get('raca').setValue(raca);
        this.animalForm.get('raca').setValidators([Validators.required]);
        this.animalForm.controls['raca'].updateValueAndValidity();

        this.animalForm.get('status').setValue(status);
        this.animalForm.get('status').setValidators([Validators.required]);
        this.animalForm.controls['status'].updateValueAndValidity();

        this.animalForm.get('tipoAlimentacao').setValue(tipoAlimentacao);
        this.animalForm.get('tipoAlimentacao').setValidators([Validators.required]);
        this.animalForm.controls['tipoAlimentacao'].updateValueAndValidity();
      });
  }

  private createForm(): void {
    this.animalForm = this.fb.group({
      dataNascimento: ['', [Validators.required]],
      descricaoAcontecimentos: [''],
      matricula: ['', [Validators.required]],
      origem: ['', [Validators.required]],
      raca: ['', [Validators.required]],
      status: ['', [Validators.required]],
      tipoAlimentacao: ['', [Validators.required]]
    })
  }

  async onSubmit(): Promise<void> {
    const loading = await this.overlayService.loading({
      message: 'Salvando...'
    });
    try {
      const animal = !this.animalId ? await this.animaisService.create(this.animalForm.value) : await this.animaisService.update({
        id: this.animalId,
        ...this.animalForm.value
      });
      this.navCtrl.navigateBack('/animais');
    } catch (error) {
      console.log('Erro ao salvar animal: ', error);
      await this.overlayService.toast({
        message: error.message
      });
    } finally {
      loading.dismiss();
    }
  }
}


