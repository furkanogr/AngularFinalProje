
import { Kategori } from './../models/kategori';
import { Uye } from './../models/uye';
import { Kayit } from './../models/kayit';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FbservisService {

  private dbKayit = '/Kayitlar';
  private dbUye = '/Uyeler';
  private dbkat = '/Kategoriler';

  kayitRef: AngularFireList<Kayit> = null;
  UyeRef: AngularFireList<Uye> = null;
  KatRef: AngularFireList<Kategori> = null;

  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) {
    this.kayitRef = db.list(this.dbKayit);
    this.UyeRef = db.list(this.dbUye);
    this.KatRef = db.list(this.dbkat);
 
  }

// oturum işlemleri
  OturumAc(mail: string, parola: string) {
    return this.afAuth.signInWithEmailAndPassword(mail, parola);

  }
  OturumKapat() {
    return this.afAuth.signOut();

  }

  OturumKontrol() {
    if (localStorage.getItem("user")){
      return true;
    }
    else{
      return false;
    }
  }

  UyeOl(uye: Uye) {
    return this.afAuth.createUserWithEmailAndPassword(uye.mail, uye.parola);
  }

  UyeEkle(uye: Uye) {
    return this.UyeRef.push(uye);
  }
// oturum işlemleri bitiş


//kayıt işlemleri başlangıç
  KayitListele() {
    return this.kayitRef;

  }
  KayitListeleByUID(uid:string) {
    return this.db.list("/Kayitlar",q=>q.orderByChild("uid").equalTo(uid))

  }
  KayitByKey(key:string) {
    return this.db.object("/Kayitlar/"+key);

  }
  KayitEkle(kayit: Kayit) {
    return this.kayitRef.push(kayit);

  }
  KayitDuzenle(kayit: Kayit) {
    return this.kayitRef.update(kayit.key, kayit);

  }
  KayitSil(key: string) {
    return this.kayitRef.remove(key);
  }

//kayıt işlemleri bitiş


//kategori işlemleri

KategoriListele() {
  return this.KatRef;

}

KategoriListeleByUID(uid: string): AngularFireList<Kategori> {
  return this.db.list("/Kategoriler", q => q.orderByChild("uid").equalTo(uid));
}

GetCategoryByKey(key: string) {
  return this.db.object("/Kategoriler/" + key);
}

KategoriEkle(kat: Kategori) {
  return this.KatRef.push(kat);
}

KategoriDuzenle(kat: Kategori) {
  return this.KatRef.update(kat.key, kat);
}

KategoriSil(key: string) {
  return this.KatRef.remove(key);
}


// kategori işlemleri bitiş


// denemeler baş

  UyeByKey(keyuye:string) {
    return this.db.object("/kayitdetay/"+keyuye);

  }
 
}

//denemeler bitiş
