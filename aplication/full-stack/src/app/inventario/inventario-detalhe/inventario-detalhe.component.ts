import { Component, OnInit } from '@angular/core';

import { Resposta } from './../../model/resposta';
import { Inventario } from './../../model/inventario';
import { InventarioService } from './../../service/inventario.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-inventario-detalhe',
  templateUrl: './inventario-detalhe.component.html',
  styleUrls: ['./inventario-detalhe.component.css']
})
export class InventarioDetalheComponent implements OnInit {

  nome: string;
  produto: string;
  existencia: string;
  preco: string;
  provedor: string;

  inventario: Inventario = new Inventario();
  msnResposta: string;
  id: any;

  constructor(private service: InventarioService, private url: ActivatedRoute) { }

  ngOnInit() {
    this.url.params.subscribe(res => this.id = res['id']);
    if (this.id) {
      this.service.getPeloID(this.id)
                  .subscribe(
                    (res) => this.inventario = res,
                    (err) => console.log(err),
                  );  //parseInt(this.id)
    }
  }

  enviar() {
    this.service.gravar(this.inventario).subscribe(
                          (resp) => this.msnResposta = resp.res,
                          (resp) => this.msnResposta = resp.res
    );
  }

}
