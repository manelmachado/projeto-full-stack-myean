import { Component, OnInit } from '@angular/core';
import { Inventario } from '../model/inventario';
import { InventarioService } from '../service/inventario.service';

@Component({
  selector: 'app-inventario-lista',
  templateUrl: './inventario-lista.component.html',
  styleUrls: ['./inventario-lista.component.css']
})
export class InventarioListaComponent implements OnInit {

  lista: Inventario[];

  constructor(private service: InventarioService) { }

  ngOnInit() {
    this.service.getInventario().subscribe(
                                  r => this.lista = r,
                                  (e) => console.log(e),
                                  () => console.log(this.lista)
    );
  }
}
