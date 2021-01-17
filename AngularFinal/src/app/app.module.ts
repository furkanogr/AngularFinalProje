import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { KayitekleComponent } from './components/kayitekle/kayitekle.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { KayitdetayComponent } from './components/kayitdetay/kayitdetay.component';
import { KayitduzenleComponent } from './components/kayitduzenle/kayitduzenle.component';
import { KayitsilComponent } from './components/kayitsil/kayitsil.component';

import { NavComponent } from './components/nav/nav.component';
import { HesabimComponent } from './components/hesabim/hesabim.component';



import { KategorilerComponent } from './components/kategoriler/kategoriler.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminduzenleComponent } from './components/adminduzenle/adminduzenle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    KayitekleComponent,
    KayitdetayComponent,
    KayitduzenleComponent,
    KayitsilComponent,
    HesabimComponent,
    AdminPageComponent,
    KategorilerComponent,
    LoginAdminComponent,
    FooterComponent,
    AdminduzenleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
