import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ContatosComponent } from './contatos/contatos.component';
//import { InventarioComponent } from './inventario/inventario/inventario.component';
import { InventarioModule } from "./inventario/inventario.module";


const routes: Routes = [
    { path: '', component: HomeComponent },
    //{path: 'inventario', loadChildren: 'app/inventario/inventario.module#InventarioModule'},
    //{ path: 'inventario', component: InventarioComponent},
    {path: 'inventario', loadChildren: () => InventarioModule},    
    { path: 'clientes', component: ClientesComponent },
    {path: 'contatos', component: ContatosComponent},
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }