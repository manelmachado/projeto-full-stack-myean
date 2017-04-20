import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//import { InventarioService } from "../service/inventario.service";
import { InventarioComponent } from "./inventario/inventario.component";
import { InventarioListaComponent } from "./inventario-lista/inventario-lista.component";
import { InventarioDetalheComponent } from './inventario-detalhe/inventario-detalhe.component';
import { InventarioRoutingModule } from './inventario.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InventarioRoutingModule
  ],
  declarations: [
    InventarioComponent,
    InventarioListaComponent,
    InventarioDetalheComponent,
  ],
  /*exports: [
    InventarioComponent,
    InventarioListaComponent,
    InventarioDetalheComponent
  ],*/
  //providers: [InventarioService]
})
export class InventarioModule { }
