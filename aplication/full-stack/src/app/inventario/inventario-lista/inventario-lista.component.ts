import { Component, OnInit } from '@angular/core';
import { Inventario } from "app/model/inventario";
import { InventarioService } from "app/service/inventario.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-inventario-lista',
  templateUrl: './inventario-lista.component.html',
  styleUrls: ['./inventario-lista.component.css']
})
export class InventarioListaComponent implements OnInit {

  lista: Inventario[];

  constructor(private service: InventarioService, private rota: Router) { }

  ngOnInit() {
    this.service.getInventario().subscribe(
                                  r => this.lista = r,
                                  (e) => console.log(e),
                                  () => console.log(this.lista)
    );
  }

  selecionar(id: number) {
    this.rota.navigate(['/inventario/detalhe',id]);
  }
}
