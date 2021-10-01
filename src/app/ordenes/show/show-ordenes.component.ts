import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ordenes } from '../ordenes';
import { OrdenesService } from '../ordenes.service';

@Component({
  selector: 'app-show-ordenes',
  templateUrl: './show-ordenes.component.html',
  styleUrls: ['./show-ordenes.component.css']
})
export class ShowOrdenesComponent implements OnInit {

  displayedColumns: string[] = ['producto', 'cliente', 'cantidad', 'fecha'];
  dataSource$!: Observable<Ordenes[]>;

  constructor(
    private apiService: OrdenesService) { }

  ngOnInit(): void {
    this.loadOrdenData();
  }

  loadOrdenData() {
    this.dataSource$ = this.apiService
      .getOrdenes();
  }
}
