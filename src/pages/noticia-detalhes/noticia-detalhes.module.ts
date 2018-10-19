import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticiaDetalhesPage } from './noticia-detalhes';

@NgModule({
  declarations: [
    NoticiaDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticiaDetalhesPage),
  ],
})
export class NoticiaDetalhesPageModule {}
