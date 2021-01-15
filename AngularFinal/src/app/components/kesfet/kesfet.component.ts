import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kayit } from 'src/app/models/kayit';
import { FbservisService } from 'src/app/services/fbservis.service';

@Component({
  selector: 'app-kesfet',
  templateUrl: './kesfet.component.html',
  styleUrls: ['./kesfet.component.css']
})
export class KesfetComponent implements OnInit {



  kayitlar: Kayit[];
  adsoyad: string = "";
  uid: string = "";
  urunler: Kayit[] = [];
  uyebilgi: String = "";

  constructor(
    public fbservis: FbservisService,
    public router: Router
  ) { }

  ngOnInit(): void {

    var user = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.adsoyad = user.displayName;
    this.KayitListele();

  }

  OturumKapat() {
    this.fbservis.OturumKapat().then(d => {
      localStorage.removeItem("user");
      this.router.navigate(['/login']);

    });

  }

  KayitListele() {
    this.fbservis.KayitListele().snapshotChanges().subscribe(data => {
      this.kayitlar = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.kayitlar.push(y as Kayit);
      });
    })
  }
}
