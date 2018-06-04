import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import ptBr from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { routes } from './app.routes';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { ErrorComponent } from './error/error.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso/ordem-compra-sucesso.component';

// pipes
import { DescriptionPipe } from './utils/description.pipe';
registerLocaleData(ptBr);


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    DiversaoComponent,
    RestaurantesComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    ErrorComponent,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent,
    DescriptionPipe,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ ({ provide: LOCALE_ID, useValue: 'pt-BR' })],
  bootstrap: [AppComponent]
})
export class AppModule { }
