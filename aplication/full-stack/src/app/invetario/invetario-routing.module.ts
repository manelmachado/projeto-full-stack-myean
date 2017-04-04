import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarioComponent } from './inventario/inventario.component';
import { InventarioDetalheComponent } from './inventario-detalhe/inventario-detalhe.component';
import { InventarioListaComponent } from './inventario-lista/inventario-lista.component';

const routes: Routes = [
  {path: 'inventario', component: InventarioComponent, children:[
    {path: '', redirectTo: 'lista', pathMatch: 'full'},
    {path: 'lista', component: InventarioListaComponent},
    {path: 'detalhe', component: InventarioDetalheComponent},
    {path: 'detalhe/:id', component: InventarioDetalheComponent},
  ]},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class InvetarioRoutingModule { }
