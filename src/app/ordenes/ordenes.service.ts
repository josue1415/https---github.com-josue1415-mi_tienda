import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ordenes } from './ordenes';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  private urlEndPoint: string = 'http://localhost:3000/ordenes';
  private urlEndPointF: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getOrdenes(): Observable<Ordenes[]> {
    return this.http.get<Ordenes[]>(this.urlEndPoint);
  }

  create(Ordenes: Ordenes): Observable<Ordenes> {
    return this.http.post<Ordenes>(this.urlEndPoint, Ordenes)
  }

  getClientes(): Observable<Ordenes> {
    return this.http.get<Ordenes>(`${this.urlEndPointF}/clientes`);
  }

  getProductos(): Observable<Ordenes[]> {
    return this.http.get<Ordenes[]>(`${this.urlEndPointF}/productos`);
  }
}
