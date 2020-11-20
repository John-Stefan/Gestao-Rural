import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from './funcionario';
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
    let funcionariosRemoveDate: Funcionario;

    if (!moment(funcionarios.data_nascimento.toString(), "DD/MM/YYYY").isValid()) {   
      require('moment/locale/pt-br'); 
      funcionarios.data_nascimento = moment(funcionarios.data_nascimento).format('L');       
      const { data_Nascimento, ...funcionariosRemoveDate } = funcionarios;
      console.log("Teste ", funcionariosRemoveDate); 
      return this.http.post("http://localhost:8080/pessoa", funcionariosRemoveDate);       
    }  
    console.log("Teste ", funcionarios);
    return this.http.post("http://localhost:8080/pessoa", funcionarios);    
  }

  public delete(id): Observable<any> {
    return this.http.delete(`http://localhost:8080/pessoa/${id}`);
  }
}
