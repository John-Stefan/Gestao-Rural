import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { Patrimonio } from '../../models/patrimonio.model';
import { PatrimoniosService } from '../../services/patrimonios.service';

@Component({
  selector: 'app-patrimonios-list',
  templateUrl: './patrimonios-list.page.html',
  styleUrls: ['./patrimonios-list.page.scss'],
})
export class PatrimoniosListPage {

  patrimonios$: Observable<Patrimonio[]>;

  constructor(private overlayService: OverlayService, private patrimoniosService: PatrimoniosService) { }

  async ionViewDidEnter(): Promise<void> {
    const loading = await this.overlayService.loading();
    this.patrimonios$ = this.patrimoniosService.getAll();
    this.patrimonios$.pipe(take(1)).subscribe(patrimonios => loading.dismiss());
  }

}
