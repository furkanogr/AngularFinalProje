import { AdminduzenleComponent } from './components/adminduzenle/adminduzenle.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { KategorilerComponent } from './components/kategoriler/kategoriler.component';
import { HesabimComponent } from './components/hesabim/hesabim.component';
import { KayitsilComponent } from './components/kayitsil/kayitsil.component';
import { KayitduzenleComponent } from './components/kayitduzenle/kayitduzenle.component';
import { KayitdetayComponent } from './components/kayitdetay/kayitdetay.component';
import { KayitekleComponent } from './components/kayitekle/kayitekle.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
const redirectLogin = () => redirectUnauthorizedTo(['login']);
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }

  },

  {
    path: 'admin-login',
    component: LoginAdminComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }

  },

  {
    path: 'G_}m%h;\E;@z8)wu@S_l@t?Qk`#QgTJJ2^@f}Q_Df?.Qb>s>($DTm|_t/Lp|b7.',
   component: AdminPageComponent,
   canActivate:[AngularFireAuthGuard],
     data:{
   authGuardPipe:redirectLogin
  }

  },



  {
    path: 'kategoriler',
    component: KategorilerComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }

  },

  {
    path: 'hesabim',
    component: HesabimComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }

  },


  {
    path: 'EMQd`V,]ks*F0ICh1E?>#[[#$^xCXyf.\Kc,9=Aw~~HC~TWEhoSzcx~TF95#WT*/:key',
    component: AdminduzenleComponent,
  },


  {
    path: 'kayitekle',
    component: KayitekleComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }

  },

  {
    path: 'kayitdetay/:key',
    component: KayitdetayComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'kayitduzenle/:key',
    component: KayitduzenleComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'kayitsil/:key',
    component: KayitsilComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },


  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
