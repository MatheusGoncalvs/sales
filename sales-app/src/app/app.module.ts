import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContentComponent } from './content/content.component';
import { PaginaInicialComponent } from './content/pagina-inicial/pagina-inicial.component';
import { PedidoVendaComponent } from './content/pedido-venda/pedido-venda.component';
import { MenuPopupComponent } from './shared/menu/menu-popup/menu-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ContentComponent,
    PaginaInicialComponent,
    PedidoVendaComponent,
    MenuPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
