import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { InventarioService } from '../service/inventario.service';

@Component({
  selector: 'app-inventario-detalhe',
  templateUrl: './inventario-detalhe.component.html',
  styleUrls: ['./inventario-detalhe.component.css']
})
export class InventarioDetalheComponent implements OnInit {

  titulo = 'Novo Material';

  id: number;
  produto: string;
  existencia: number;
  preco: number;
  provedor: string;

  constructor(private url: ActivatedRoute,
              private rota: Router,
              private service: InventarioService) { }

  ngOnInit() {
    let meuId = this.url.snapshot.params['id'];

    if(meuId)
    console.log(meuId);
  }

  gravarInventario() {
    console.log(this.produto);
    /*this.service.addInventario(this.produto)
                .subscribe(
                  res => console.log(res),
                  err => console.log(err),
                  ()=> console.log('terminado')
                );*/
  }
}