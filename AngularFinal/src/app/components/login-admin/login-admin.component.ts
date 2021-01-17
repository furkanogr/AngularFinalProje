import { Router } from '@angular/router';
import { FbservisService } from 'src/app/services/fbservis.service';
import { Component, OnInit } from '@angular/core';
import { Sonuc } from 'src/app/models/sonuc';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  sonuc:Sonuc= new Sonuc();

  constructor(
    public fbservis:FbservisService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  GirisYapAdmin(mail: string, parola: string) {​​
    if (mail == "admin@fogr.com" && parola == "123456") {​​
    this.fbservis.OturumAc(mail, parola).then((d: {​​ user: any; }​​) => {​​
    if (d.user) {​​
    localStorage.setItem("user", JSON.stringify(d.user));
    this.router.navigate(['/G_}m%h;\E;@z8)wu@S_l@t?Qk`#QgTJJ2^@f}Q_Df?.Qb>s>($DTm|_t/Lp|b7.']);
    }​​ else {​​ alert("hatalı giriş") }​​
    }​​);
    }​​ else {​​
    alert("Geçersiz")
    this.router.navigate(['/']);
    
    }​​
    
    }​​
}
