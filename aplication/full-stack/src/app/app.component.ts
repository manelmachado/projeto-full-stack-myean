import { Component } from '@angular/core';
import { Inventario } from './invetario/model/inventario';
import { TesteService } from './teste.service';
import { Resposta } from './invetario/model/resposta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
    inventario: Inventario = new Inventario(0, 'mesa', 500, 100, 'bahia');

/*inventario = {
  produto: 'mesa',
  existencia: 10,
  preco: 100,
  provedor: 'bahia'
}*/
obj: Resposta;

    constructor(private service: TesteService){ 
      service.gravar(this.inventario).subscribe(res=> {
        console.log(res.res)
        this.obj = res
        console.log(this.obj);
      },
      err => console.log(err), () => console.log('feito'));

      //console.log(this.obj);
    }
    

}
