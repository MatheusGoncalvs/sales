import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './produto.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PesquisaProdutoComponent } from './pesquisa-produto/pesquisa-produto.component';
import { ProdutoRoutingModule } from './produto-routing.module';


@NgModule({
  declarations: [
    ProdutoComponent,
    PesquisaProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    SharedModule
  ]
})
export class ProdutoModule { }
