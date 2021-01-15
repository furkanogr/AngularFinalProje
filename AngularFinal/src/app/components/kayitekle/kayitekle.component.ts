
import { Kategori } from './../../models/kategori';
import { FbservisService } from './../../services/fbservis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Kayit } from 'src/app/models/kayit';

@Component({
  selector: 'app-kayitekle',
  templateUrl: './kayitekle.component.html',
  styleUrls: ['./kayitekle.component.css']
})
export class KayitekleComponent implements OnInit {
key: string;
secKayit:Kayit = new Kayit;
Ekkategori:Kategori = new Kategori;
kategoridrop: Kategori[];


  constructor(
    public fbservis:FbservisService,
    public router:Router,
    public route: ActivatedRoute,
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
    this.fbservis.KategoriEkle(this.Ekkategori).then(d=>{
      this.router.navigate(['/'])
    });
  }

 

  }

