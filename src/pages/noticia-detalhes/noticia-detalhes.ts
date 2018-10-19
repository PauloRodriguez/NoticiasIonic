import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Noticia } from '../model/noticia';
import { NOTICIA } from '../config/api.config';

/**
 * Generated class for the NoticiaDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticia-detalhes',
  templateUrl: 'noticia-detalhes.html',
})
export class NoticiaDetalhesPage {

  noticia : Noticia[] = NOTICIA;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiaDetalhesPage');
  }

}
