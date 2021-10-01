import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Clientes } from '../../clientes';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  dataSource$: Clientes = new Clientes();

  constructor(
    private apiService: ClientesService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadClienteData();
  }

  async loadClienteData() {
    await this.activatedRouter.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.apiService
          .getClientesID(id).subscribe((data) => (this.dataSource$ = data));
      }
    });
  }
  
}
