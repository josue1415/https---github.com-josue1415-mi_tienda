import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientes } from '../../clientes';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-mainClientes',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainClientesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombres', 'apellidos', 'telefono', 'correo', 'nit','action'];
  dataSource$!: Observable<Clientes[]>;

  constructor(
    private apiService: ClientesService) { }

  ngOnInit(): void{
    this.loadClientData();
  }

  loadClientData(){
    this.dataSource$ = this.apiService
      .getClientes();
  }

}
