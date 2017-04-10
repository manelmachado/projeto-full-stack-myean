import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
  animations: [
    trigger('botoes', [
      state('inativo', style({
        transform: 'scale(1)'
      })),
      state('ativo', style({
        //backgroundColor: '#cfd8dc',
        transform: 'scale(1.2)'
      })),
      state('clicado', style({
        backgroundColor: '#cfd8dc'
      })),

      transition('inativo => ativo', animate('100ms ease-in')),
      transition('ativo => inativo', animate('100ms ease-out'))
    ])
  ]
})
export class InventarioComponent implements OnInit {

  estado1 = 'inativo';
  estado2 = 'inativo';
  

  constructor() { }

  ngOnInit() {
    
  }

}