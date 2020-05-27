import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoVendaComponent } from '../content/pedido-venda/pedido-venda.component';

const routes: Routes = [
  { path: 'content/pedido-venda/pedido-venda', component: PedidoVendaComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class SharedRoutingModule { }
