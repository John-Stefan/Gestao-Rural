/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { Animal } from 'src/app/animais/models/animal.model';
import { AnimaisService } from 'src/app/animais/services/animais.service';
import { ProducoesService } from '../../services/producoes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-producao-save',
  templateUrl: './producao-save.page.html',
  styleUrls: ['./producao-save.page.scss'],
})
export class ProducaoSavePage implements OnInit {
  animais$: Observable<Animal[]>;
  producaoForm: FormGroup;
  pageTitle = '...';
  producaoId: string = undefined;

  constructor(private fb: FormBuilder, private producoesService: ProducoesService, private animaisService: AnimaisService, private navCtrl: NavController, private overlayService: OverlayService, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.createForm();

    const loading = await this.overlayService.loading();
    this.animais$ = this.animaisService.getAll();
    this.animais$.pipe(take(1)).subscribe(producoes => loading.dismiss());

    this.init();
  }

  init(): void {
    const producaoId = this.route.snapshot.paramMap.get('id');
    if (!producaoId) {
      this.pageTitle = 'Inserção da Produção';
      return;
    }
    this.producaoId = producaoId;
    this.pageTitle = 'Emissão de Produção';
    this.producoesService.get(producaoId)
      .pipe(take(1))
      .subscribe(({ dataInicioProducao, dataFimProducao, registro, animalReg, quantidadeLeite, peso, notaAnimal }) => {
        this.producaoForm.get('dataInicioProducao').setValue(dataInicioProducao);
        this.producaoForm.get('dataFimProducao').setValue(dataFimProducao);
        this.producaoForm.get('registro').setValue(registro);
        this.producaoForm.get('animalReg').setValue(animalReg);
        this.producaoForm.get('quantidadeLeite').setValue(quantidadeLeite);
        this.producaoForm.get('peso').setValue(peso);
        this.producaoForm.get('notaAnimal').setValue(notaAnimal);
      });
  }

  createForm() {
    this.producaoForm = this.fb.group({
      dataInicioProducao: ['', [Validators.required]],
      dataFimProducao: ['', [Validators.required]],
      registro: ['', [Validators.required]],
      //animalReg: ['', [Validators.required]],
      quantidadeLeite: ['', [Validators.required]],
      peso: ['', [Validators.required]],
      notaAnimal: ['', [Validators.required]]
    });
  }

  async onSubmit(): Promise<void> {
    const loading = await this.overlayService.loading({
      message: 'Salvando...'
    });
    try {
      const producao = !this.producaoId ? await this.producoesService.create(this.producaoForm.value) : await this.producoesService.update({
        id: this.producaoId,
        ...this.producaoForm.value
      });
      this.navCtrl.navigateBack('/producoes');
    } catch (error) {
      console.log('Erro ao salvar a produção: ', error);
      await this.overlayService.toast({
        message: error.message
      });
    } finally {
      loading.dismiss();
    }
  }
}


