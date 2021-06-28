/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { Patrimonio } from 'src/app/patrimonios/models/patrimonio.model';
import { PatrimoniosService } from 'src/app/patrimonios/services/patrimonios.service';
import { AnimaisService } from '../../services/animais.service';

@Component({
  selector: 'app-animal-save',
  templateUrl: './animal-save.page.html',
  styleUrls: ['./animal-save.page.scss'],
})
export class AnimalSavePage implements OnInit {
  animalForm: FormGroup;
  pageTitle = '...';
  animalId: string = undefined;
  patrimonios$: Observable<Patrimonio[]>;

  constructor(
    private fb: FormBuilder, private animaisService: AnimaisService, private navCtrl: NavController, private overlayService: OverlayService, private route: ActivatedRoute, private patrimoniosService: PatrimoniosService
  ) { }

  async ngOnInit(): Promise<void> {
    this.createForm();

    const loading = await this.overlayService.loading();
    this.patrimonios$ = this.patrimoniosService.getAll();
    this.patrimonios$.pipe(take(1)).subscribe(patrimonios => loading.dismiss());

    this.init();
  }

  init(): void {
    const animalId = this.route.snapshot.paramMap.get('id');
    if (!animalId || animalId === 'producao') {
      this.pageTitle = 'Cadastro de Animal';
      return;
    }
    this.animalId = animalId;
    this.pageTitle = 'Emissão de Animal';
    this.animaisService.get(animalId)
      .pipe(take(1))
      .subscribe(({ matricula, dataNascimento, descricaoAcontecimentos, origem, raca, fazenda, status, tipoAlimentacao }) => {
        this.animalForm.get('matricula').setValue(matricula);
        this.animalForm.get('descricaoAcontecimentos').setValue(descricaoAcontecimentos);
        this.animalForm.get('dataNascimento').setValue(dataNascimento);

        this.animalForm.get('origem').setValue(origem);
        this.animalForm.get('origem').setValidators([Validators.required]);
        this.animalForm.controls['origem'].updateValueAndValidity();

        this.animalForm.get('raca').setValue(raca);
        this.animalForm.get('raca').setValidators([Validators.required]);
        this.animalForm.controls['raca'].updateValueAndValidity();

        this.animalForm.get('fazenda').setValue(fazenda);

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
      fazenda: ['', [Validators.required]],
      status: ['', [Validators.required]],
      tipoAlimentacao: ['', [Validators.required]]
    });
  }

  async onSubmit(): Promise<void> {
    const animalId = this.route.snapshot.paramMap.get('id');
    const loading = await this.overlayService.loading({
      message: 'Salvando...'
    });
    try {
      const animal = !this.animalId ? await this.animaisService.create(this.animalForm.value) : await this.animaisService.update({
        id: this.animalId,
        ...this.animalForm.value
      });
      if (animalId === 'producao') {
        this.navCtrl.navigateBack('/producoes/create');
      }
      else {
        this.navCtrl.navigateBack('/animais');
      }
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


