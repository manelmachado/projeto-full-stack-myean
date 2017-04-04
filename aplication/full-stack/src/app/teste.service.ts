import { Resposta } from './invetario/model/resposta';
import { Http } from '@angular/http';
import { Inventario } from './invetario/model/inventario';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TesteService {

  url = 'http://localhost:3000/inventario/';


  constructor(private http: Http) { }

  gravar(inventario: any): Observable<Resposta> {
    return this.http.post(this.url, inventario)
                    .map(r=> r.json())
                    .catch(err=> err);
  }

}
