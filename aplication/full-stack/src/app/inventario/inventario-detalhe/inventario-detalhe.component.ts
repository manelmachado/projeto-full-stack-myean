import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
