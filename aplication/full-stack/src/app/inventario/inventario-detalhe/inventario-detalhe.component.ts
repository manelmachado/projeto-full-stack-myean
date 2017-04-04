import { Component, OnInit } from '@angular/core';

import { Resposta } from './../../model/resposta';
import { Inventario } from './../../model/inventario';
import { InventarioService } from './../../service/inventario.service';

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

  constructor(private service: InventarioService) { }

  ngOnInit() {
  }

  enviar() {
    this.service.gravar(this.inventario).subscribe(
                          (resp) => this.msnResposta = resp.res,
                          (resp) => this.msnResposta = resp.res
    );
  }

}
