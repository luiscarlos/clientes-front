import { Injectable, OnInit } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  constructor(private http: HttpClient) {

   }

   salvar(cliente: Cliente): Observable<Cliente>{
   return this.http.post<Cliente>('Http://localhost:8080/api/clientes',cliente);
  }

}
