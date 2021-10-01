import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from '../productos';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-main-prod',
  templateUrl: './main-prod.component.html',
  styleUrls: ['./main-prod.component.css']
})
export class MainProdComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'precio','action'];
  dataSource$!: Observable<Productos[]>;

  constructor(
    private apiService: ProductosService) { }

  ngOnInit(): void{
    this.loadClientData();
  }

  loadClientData(){
    this.dataSource$ = this.apiService
      .getProductos();
  }
}
