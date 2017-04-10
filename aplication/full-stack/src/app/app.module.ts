import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';
import { ContatosComponent } from './contatos/contatos.component';
import { InventarioService } from 'app/service/inventario.service';
import { InventarioModule } from "app/inventario/inventario.module";


@NgModule({
  declarations: [
    AppComponent,

    ClientesComponent,
    HomeComponent,
    ContatosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

    InventarioModule, 
  ],
  providers: [InventarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
