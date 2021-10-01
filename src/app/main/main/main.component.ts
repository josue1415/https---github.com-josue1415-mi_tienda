import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-mainTienda',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainTiendaComponent implements OnInit {

  constructor(private vcRef: ViewContainerRef, private cResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  async showMainCliente() {
    this, this.vcRef.clear();
    const { MainClientesComponent } = await import('src/app/clientes/main/main/main.component');
    this.vcRef.createComponent(this.cResolver.resolveComponentFactory(MainClientesComponent));
  }

  async showProducto() {
    this, this.vcRef.clear();
    const { MainProdComponent } = await import('src/app/productos/main-prod/main-prod.component');
    this.vcRef.createComponent(this.cResolver.resolveComponentFactory(MainProdComponent));
  }

  async showOrden() {
    this, this.vcRef.clear();
    const { ShowOrdenesComponent } = await import('src/app/ordenes/show/show-ordenes.component');
    this.vcRef.createComponent(this.cResolver.resolveComponentFactory(ShowOrdenesComponent));
  }

}
