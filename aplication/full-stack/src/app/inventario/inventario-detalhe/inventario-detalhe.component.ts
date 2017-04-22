import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Resposta } from './../../model/resposta';
import { Inventario } from './../../model/inventario';
import { InventarioService } from './../../service/inventario.service';
import { Animacao } from '../../animacao';

@Component({
  selector: 'app-inventario-detalhe',
  templateUrl: './inventario-detalhe.component.html',
  styleUrls: ['./inventario-detalhe.component.css'],
  animations: [Animacao]
})
export class InventarioDetalheComponent implements OnInit {
  
  @HostBinding('@routerAnimation') routerAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

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
