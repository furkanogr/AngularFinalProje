import { FbservisService } from './services/fbservis.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Hafta13';

  constructor(
    public fbservis:FbservisService
  ){

  }
}




