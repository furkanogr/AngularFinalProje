import { FbservisService } from './../../services/fbservis.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Kayit } from 'src/app/models/kayit';

@Component({
  selector: 'app-kayitekle',
  templateUrl: './kayitekle.component.html',
  styleUrls: ['./kayitekle.component.css']
})
export class KayitekleComponent implements OnInit {
secKayit:Kayit = new Kayit;
  constructor(
    public fbservis:FbservisService,
    public router:Router
  ) { }

  ngOnInit(): void {
    
  }

  Kaydet(){
    var user=JSON.parse(localStorage.getItem("user"));
    this.secKayit.uid=user.uid;
    var tarih = new Date();
    this.secKayit.kayTarih= tarih.getTime().toString();
    this.secKayit.duzTarih= tarih.getTime().toString();
    this.fbservis.KayitEkle(this.secKayit).then(d=>{
      this.router.navigate(['/'])
    });
  }

}
