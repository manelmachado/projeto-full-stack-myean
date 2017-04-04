import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';
import { ContatosComponent } from './contatos/contatos.component';
import { HomeRoutingModule } from './app.routing.module';
import { InventarioService } from "app/service/inventario.service";

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HomeComponent,
    ContatosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
    HomeRoutingModule,    
  ],
  providers: [InventarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
