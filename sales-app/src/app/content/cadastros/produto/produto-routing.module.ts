import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PesquisaProdutoComponent } from './pesquisa-produto/pesquisa-produto.component';


const routes: Routes = [
  { path: 'content/cadastros/produto/pesquisa-produto/pesquisa-produto', component: PesquisaProdutoComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
