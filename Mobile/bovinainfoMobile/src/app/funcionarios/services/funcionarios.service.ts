/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/quotes */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  constructor(private http: HttpClient) { }

  public getPessoa(): Observable<any> {
    return this.http.get("http://localhost:8080/pessoa");
  }

  public setPessoa(pessoas): Observable<any> {
    return this.http.post("http://localhost:8080/pessoa", pessoas);
  }

  public delete(id): Observable<any> {
    return this.http.delete(`http://localhost:8080/pessoa/${id}`);
  }
}

