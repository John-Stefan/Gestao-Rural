import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getFuncionario(): Observable<any> {
    return this.http.get("http://localhost:8080/funcionario");
  }
  public createFuncionario(funcionarios): Observable<any> {
    let ob = funcionarios;    
    console.log(ob);
    return this.http.post("http://localhost:8080/funcionario", ob);
  }
}
