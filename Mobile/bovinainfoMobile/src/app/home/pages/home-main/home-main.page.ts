import { Component, OnInit } from '@angular/core';
import { OverlayService } from 'src/app/core/services/overlay.service';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.page.html',
  styleUrls: ['./home-main.page.scss'],
})
export class HomeMainPage implements OnInit {

  constructor(private overlayService: OverlayService) { }

  async ngOnInit(): Promise<void> {
    const loading = await this.overlayService.loading({
      duration: 1500
    });
  }
}


