import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getFuncionario(): Observable<any> {
    return this.http.get("http://localhost:8080/funcionario");
  }
  public createFuncionario(funcionarios: { nome, cpf, data_nascimento, telefone, endereco}): Observable<any> {
    return this.http.post("http://localhost:8080/funcionario", funcionarios);
  }
}
