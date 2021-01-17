import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Kayit } from 'src/app/models/kayit';
import { FbservisService } from 'src/app/services/fbservis.service';

@Component({
  selector: 'app-adminduzenle',
  templateUrl: './adminduzenle.component.html',
  styleUrls: ['./adminduzenle.component.css']
})
export class AdminduzenleComponent implements OnInit {
  key: string;
  secKayit: Kayit= new Kayit();
  uid:string;

  constructor(
    public route: ActivatedRoute,
    public fbServis: FbservisService,
    public router: Router
  ) { }

  ngOnInit(): void {
    var user = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.route.params.subscribe(p => {
      this.key = p.key;
      this.KayitGetir();
    })
  }

  KayitGetir() {
    this.fbServis.KayitByKey(this.key).snapshotChanges().subscribe(data => {
      const y = { ...data.payload.toJSON(), key: this.key };
      this.secKayit=(y as Kayit);
      if (this.uid!=this.secKayit.uid){
        this.router.navigate(['/kayitlar']);

      }

    });
  }
  Kaydet(){
    var tarih =new Date();
    this.secKayit.duzTarih=tarih.getTime().toString();
    this.fbServis.KayitDuzenle(this.secKayit).then(d=>{
      this.router.navigate(['G_}m%h;\E;@z8)wu@S_l@t?Qk`#QgTJJ2^@f}Q_Df?.Qb>s>($DTm|_t/Lp|b7.']);
    });
    this.fbServis.KayitDuzenle(this.secKayit).then(d=>{
      this.router.navigate(['G_}m%h;\E;@z8)wu@S_l@t?Qk`#QgTJJ2^@f}Q_Df?.Qb>s>($DTm|_t/Lp|b7.'])
    });
  }

}
