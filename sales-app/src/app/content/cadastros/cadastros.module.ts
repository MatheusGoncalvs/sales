import { NgModule } from '@angular/core';
import { ClienteComponent } from './cliente/cliente.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ClienteComponent, VendedorComponent],
  imports: [
    SharedModule
  ]
})
export class CadastrosModule { }
