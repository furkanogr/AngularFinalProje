import { Uye } from './../../models/uye';
import { FbservisService } from './../../services/fbservis.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Kayit } from 'src/app/models/kayit';

@Component({
  selector: 'app-kayitdetay',
  templateUrl: './kayitdetay.component.html',
  styleUrls: ['./kayitdetay.component.css']
})
export class KayitdetayComponent implements OnInit {
  key: string;
  keyuye:string;
  secKayit: Kayit= new Kayit();
  secUye: Uye = new Uye();
  durum: boolean =false;

  constructor(
    public route: ActivatedRoute,
    public fbServis: FbservisService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.key = p.key;
      this.KayitGetir();
      
    })
  }

  KayitGetir() {
    this.fbServis.KayitByKey(this.key).snapshotChanges().subscribe(data => {
      const y = { ...data.payload.toJSON(), key: this.key };
      this.secKayit=(y as Kayit);
      this.secUye=(y as Uye);

    });
  }

}


