import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';
import { ContatosComponent } from './contatos/contatos.component';
import { HomeRoutingModule } from './app.routing.module';
import { Angular4Component } from './angular4/angular4.component';
import { TesteService } from './teste.service';
import { InventarioModule } from "app/inventario/inventario.module";

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HomeComponent,
    ContatosComponent,
    Angular4Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    HomeRoutingModule,
    InventarioModule
  ],
  providers: [TesteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
