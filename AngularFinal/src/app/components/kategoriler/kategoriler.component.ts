import { Router } from '@angular/router';
import { FbservisService } from 'src/app/services/fbservis.service';
import { Component, OnInit } from '@angular/core';
import { Kategori } from 'src/app/models/kategori';

@Component({
  selector: 'app-kategoriler',
  templateUrl: './kategoriler.component.html',
  styleUrls: ['./kategoriler.component.css']
})
export class KategorilerComponent implements OnInit {

  adsoyad: string;
  uid: string;
  kategoriler: Kategori[];
  constructor(
    public fbservis: FbservisService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }


  KategoriListele() {
    this.fbservis.KategoriListele().snapshotChanges().subscribe(data => {
      this.kategoriler = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.kategoriler.push(y as Kategori);
      });
    })
  }

}
