import { NgModule } from '@angular/core';
import { PesquisaProdutoComponent } from './pesquisa-produto/pesquisa-produto.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'content/cadastros/produto/pesquisa-produto/pesquisa-produto', component: PesquisaProdutoComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
