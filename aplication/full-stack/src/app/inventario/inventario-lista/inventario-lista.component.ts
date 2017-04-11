import { Component, OnInit, HostBinding } from '@angular/core';
import { Inventario } from "app/model/inventario";
import { InventarioService } from "app/service/inventario.service";
import { Router } from "@angular/router";
import { Animacao } from "../../animacao";

@Component({
  selector: 'app-inventario-lista',
  templateUrl: './inventario-lista.component.html',
  styleUrls: ['./inventario-lista.component.css'],
  animations: [Animacao]
})
export class InventarioListaComponent implements OnInit {

  @HostBinding('@routerAnimation') routerAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute'; 

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

  eliminar(id: number) {
    this.service.deletar(id).subscribe(
                              resp => console.log(resp),
                              (err) => console.log(err),
                              () => {
                                console.log('filtrar');
                                this.lista = this.lista.filter(h => h.id != id)
                              }
    );
  }
}
