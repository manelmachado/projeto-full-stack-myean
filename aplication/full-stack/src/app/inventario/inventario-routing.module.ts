import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarioComponent } from "app/inventario/inventario/inventario.component";
import { InventarioListaComponent } from "app/inventario/inventario-lista/inventario-lista.component";
import { InventarioDetalheComponent } from "app/inventario/inventario-detalhe/inventario-detalhe.component";

const routes: Routes = [{path: 'inventario', component: InventarioComponent, children:[
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
export class InventarioRoutingModule { }
