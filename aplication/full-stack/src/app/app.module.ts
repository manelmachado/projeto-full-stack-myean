import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';
import { ContatosComponent } from './contatos/contatos.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';
import { InventarioService } from 'app/service/inventario.service';
import { InventarioComponent } from './inventario/inventario/inventario.component';
import { InventarioRoutingModule } from './inventario/inventario.routing.module';
import { InventarioListaComponent } from './inventario/inventario-lista/inventario-lista.component';
import { InventarioDetalheComponent } from './inventario/inventario-detalhe/inventario-detalhe.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HomeComponent,
    ContatosComponent,
    InventarioComponent,
    InventarioListaComponent,
    InventarioDetalheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InventarioRoutingModule,
    AppRoutingModule,    
  ],
  providers: [InventarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
