import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Productos } from '../productos';
import { ProductosService } from '../productos.service';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-show-prod',
  templateUrl: './show-prod.component.html',
  styleUrls: ['./show-prod.component.css']
})
export class ShowProdComponent implements OnInit {

  dataSource$: Productos = new Productos();

  constructor(
    private apiService: ProductosService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProdData();
  }

  async loadProdData() {
    await this.activatedRouter.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.apiService
          .getProductosID(id).subscribe((data) => (this.dataSource$ = data));
      }
    });
  }

}
