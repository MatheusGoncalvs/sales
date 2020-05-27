import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { PaginaInicialComponent } from './content/pagina-inicial/pagina-inicial.component';
import { PedidoVendaModule } from './content/pedido-venda/pedido-venda.module';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    PaginaInicialComponent,
  ],
  imports: [
    BrowserModule,
    PedidoVendaModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
