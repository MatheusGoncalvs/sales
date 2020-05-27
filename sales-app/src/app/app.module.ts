import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { PaginaInicialComponent } from './content/pagina-inicial/pagina-inicial.component';
import { PedidoVendaModule } from './content/pedido-venda/pedido-venda.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    PaginaInicialComponent,
  ],
  imports: [
    BrowserModule,
    PedidoVendaModule,
    AppRoutingModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
