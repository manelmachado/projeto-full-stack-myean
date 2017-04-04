import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvetarioRoutingModule } from './invetario-routing.module';
import { InventarioListaComponent } from './inventario-lista/inventario-lista.component';
import { InventarioDetalheComponent } from './inventario-detalhe/inventario-detalhe.component';
import { InventarioComponent } from './inventario/inventario.component';
import { InventarioService } from './service/inventario.service';
import { RespostaComponent } from './model/resposta/resposta.component';

@NgModule({
  imports: [
    CommonModule,
    InvetarioRoutingModule,
  ],
  declarations: [
    InventarioComponent,
    InventarioListaComponent,
    InventarioDetalheComponent,
    RespostaComponent
    ],
    providers: [InventarioService]
})
export class InvetarioModule { }
