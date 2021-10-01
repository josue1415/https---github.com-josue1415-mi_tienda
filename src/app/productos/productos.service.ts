import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from './productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private urlEndPoint: string = 'http://localhost:3000/productos';
  constructor(private http: HttpClient) { }

  getProductos(): Observable<Productos[]> {
    return this.http.get<Productos[]>(this.urlEndPoint);
  }
  
  getProductosID(id: number): Observable<Productos> {
    return this.http.get<Productos>(`${this.urlEndPoint}/${id}`);
  }

  create(prod: Productos): Observable<Productos> {
    return this.http.post<Productos>(this.urlEndPoint, prod)
  }

}
