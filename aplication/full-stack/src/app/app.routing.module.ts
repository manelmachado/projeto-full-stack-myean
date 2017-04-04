import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//import { InventarioComponent } from './inventario/inventario.component';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ContatosComponent } from './contatos/contatos.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    /*{ path: 'inventario', component: InventarioComponent },*/
    { path: 'clientes', component: ClientesComponent },
    {path: 'contatos', component: ContatosComponent},
    ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule { 
    

}