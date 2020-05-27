import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaInicialComponent } from './content/pagina-inicial/pagina-inicial.component';


const routes: Routes = [
  { path: 'content/pagina-inicial', component: PaginaInicialComponent },
  { path: '', redirectTo: 'content/pagina-inicial', pathMatch: 'full' },
  { path: '**', redirectTo: 'content/pagina-inicial', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
