import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../service/inventario.service';
import { Inventario } from '../model/inventario';

@Component({
  selector: 'inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    
  }

}