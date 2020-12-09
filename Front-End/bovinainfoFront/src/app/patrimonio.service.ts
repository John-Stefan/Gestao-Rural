import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patrimonio } from './patrimonio';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class PatrimonioService {

  constructor(private http: HttpClient) { }

  public getPatrimonio(): Observable<any> {    
    return this.http.get("http://localhost:8080/patrimonio");
  }

  public setPatrimonio(patrimonio): Observable<any> {    
    console.log("Teste ", patrimonio);   
    return this.http.post("http://localhost:8080/patrimonio", patrimonio);   
  }

  public delete(id): Observable<any> {
    return this.http.delete(`http://localhost:8080/patrimonio/${id}`);
  }
}
