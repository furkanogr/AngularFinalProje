import { Kayit } from 'src/app/models/kayit';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FbservisService } from 'src/app/services/fbservis.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  adsoyad: string;
  uid: string;
  kayitlar: Kayit[];

  key: string;
  secKayit: Kayit= new Kayit();
 

  constructor(
    public fbservis: FbservisService,
    public router: Router,
    public route: ActivatedRoute
    
  ) { }

  ngOnInit(): void {

    var user = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.route.params.subscribe(p => {
      this.key = p.key;
      this.KayitGetir();
    })

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





  //-----------------------------------
  


  KayitGetir() {
    this.fbservis.KayitByKey(this.key).snapshotChanges().subscribe(data => {
      const y = { ...data.payload.toJSON(), key: this.key };
      this.secKayit=(y as Kayit);
     

    });
  }
  Kaydet(){
    var tarih =new Date();
    this.secKayit.duzTarih=tarih.getTime().toString();
    this.fbservis.KayitDuzenle(this.secKayit).then(d=>{
      this.router.navigate(['/']);
    });
    this.fbservis.KayitDuzenle(this.secKayit).then(d=>{
      this.router.navigate(['/'])
    });
  }

}



