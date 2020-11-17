import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  public getFuncionario(): Observable<any> {    
    return this.http.get("http://localhost:8080/pessoa");
  }

  public setFuncionario(funcionarios): Observable<any> {   
    var moment = require('moment');
    require('moment/locale/pt-br');    
    funcionarios.data_nascimento = moment(funcionarios.data_nascimento).format('L');     
    return this.http.post("http://localhost:8080/pessoa", funcionarios);
  }
}
