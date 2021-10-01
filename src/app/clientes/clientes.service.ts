import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientes } from './clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private urlEndPoint: string = 'http://localhost:3000/clientes';
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.urlEndPoint);
  }

  create(cliente: Clientes): Observable<Clientes> {
    return this.http.post<Clientes>(this.urlEndPoint, cliente)
  }

  getClientesID(id: number): Observable<Clientes> {
    return this.http.get<Clientes>(`${this.urlEndPoint}/${id}`);
  }

}
