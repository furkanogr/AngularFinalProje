import { KesfetComponent } from './components/kesfet/kesfet.component';
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
import {AngularFireAuthGuard,redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
const redirectLogin=()=>redirectUnauthorizedTo(['login']);
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate:[AngularFireAuthGuard],
    data:{
      authGuardPipe:redirectLogin
    }

  },
  {
    path: 'hesabim',
    component: HesabimComponent,
    canActivate:[AngularFireAuthGuard],
    data:{
      authGuardPipe:redirectLogin
    }

  },
  
  {
    path: 'kayitlar',
    component: KayitlarComponent,
    canActivate:[AngularFireAuthGuard],
    data:{
      authGuardPipe:redirectLogin
    }

  },
  {
    path: 'kesfet',
    component: KesfetComponent,
    canActivate:[AngularFireAuthGuard],
    data:{
      authGuardPipe:redirectLogin
    }

  },

  {
    path: 'kayitekle',
    component: KayitekleComponent,
    canActivate:[AngularFireAuthGuard],
    data:{
      authGuardPipe:redirectLogin
    }

  },

  {
    path: 'kayitdetay/:key',
    component: KayitdetayComponent,
    canActivate:[AngularFireAuthGuard],
    data:{
      authGuardPipe:redirectLogin
    }
  },
  {
    path: 'kayitduzenle/:key',
    component: KayitduzenleComponent,
    canActivate:[AngularFireAuthGuard],
    data:{
      authGuardPipe:redirectLogin
    }
  },
  {
    path: 'kayitsil/:key',
    component: KayitsilComponent,
    canActivate:[AngularFireAuthGuard],
    data:{
      authGuardPipe:redirectLogin
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
