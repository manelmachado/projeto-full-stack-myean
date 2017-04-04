import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Inventario } from '../model/inventario';

@Injectable()
export class InventarioService {

  private header = new Headers({'Content-Type': 'application/json'});
  private url = 'http://localhost:3000/inventario/';

  constructor(private http: Http) { }

  getInventario(): Observable<Inventario[]> {

    return this.http.get(this.url)
                    .map(r => r.json())
                    .catch(this.handleError);
  }

  addInventario(modelo: Inventario) {
    return this.http.post(this.url, JSON.stringify(modelo), this.header).map(res => res.json())._catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errMsg: string;

    if(error instanceof Response){
      let body = error.json() || '';
      let err = body.error || JSON.stringify(body);

      errMsg = `${error.status} - ${error.statusText || ''} - ${err}`;
    }
    else{
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}