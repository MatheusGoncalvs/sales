import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoVendaComponent } from '../content/pedido-venda/pedido-venda.component';
import { ProdutoComponent } from '../content/cadastros/produto/produto.component';
import { ClienteComponent } from '../content/cadastros/cliente/cliente.component';
import { VendedorComponent } from '../content/cadastros/vendedor/vendedor.component';
import { PesquisaProdutoComponent } from '../content/cadastros/produto/pesquisa-produto/pesquisa-produto.component';

const routes: Routes = [
  { path: 'content/pedido-venda/pedido-venda', component: PedidoVendaComponent },
  { path: 'content/cadastros/produto/produto', component: ProdutoComponent },
  { path: 'content/cadastros/cliente/cliente', component: ClienteComponent },
  { path: 'content/cadastros/vendedor/vendedor', component: VendedorComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SharedRoutingModule { }
