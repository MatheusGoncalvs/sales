import { NgModule } from '@angular/core';
import { PedidoVendaComponent } from './pedido-venda.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PedidoVendaComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PedidoVendaModule { }
