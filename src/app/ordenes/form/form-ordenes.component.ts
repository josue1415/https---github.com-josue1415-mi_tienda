import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { AppComponent } from 'src/app/app.component';
import { Location } from '@angular/common';
import { Ordenes } from '../ordenes';
import { OrdenesService } from '../ordenes.service';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { ProductosService } from 'src/app/productos/productos.service';
import { Observable } from 'rxjs';
import { Clientes } from 'src/app/clientes/clientes';
import { Productos } from 'src/app/productos/productos';

@Component({
  selector: 'app-form-ordenes',
  templateUrl: './form-ordenes.component.html',
  styleUrls: ['./form-ordenes.component.css']
})
export class FormOrdenesComponent extends AppComponent implements OnInit {

  orden: Ordenes = new Ordenes();
  dataSourceCliente$!: Observable<Clientes[]>;
  dataSourceProd$!: Observable<Productos[]>;
  // form!: FormGroup;
  items!: FormArray;

  date = new FormControl(new Date());

  constructor(
    private ordenService: OrdenesService,
    location: Location,
    private clienteService: ClientesService,
    private productoService: ProductosService,
    private formBuilder: FormBuilder) {
    super(location);
  }

  get idProducto() { return this.form.controls['idProducto'] as FormArray; }

  ngOnInit(): void {
    this.loadClientData();
    this.loadProdData();
  }

  form = this.formBuilder.group({
    idProducto: this.formBuilder.array([]),
    idCliente: new FormControl('', [Validators.required]),
    cantidad: new FormControl('', [Validators.required,
    Validators.minLength(9)]),
    fecha: new FormControl('', [Validators.required])
  });

  // Obtiene datos de clientes
  loadClientData() {
    this.dataSourceCliente$ = this.clienteService
      .getClientes();
  }

  // obtiene datos de productos
  loadProdData() {
    this.dataSourceProd$ = this.productoService
      .getProductos();
  }

  addProduct():void {
    const form = this.formBuilder.group({
      idProducto: new FormControl('', [Validators.required])
    });
    this.idProducto.push(form);
  }

  submit():void {
    this.orden = this.form.value;
    this.orden.fecha = new Date();
    this.orden.idProducto = 1;
    console.log(this.orden);
    if (
      this.orden.idProducto == 0 ||
      this.orden.idProducto == null ||
      this.orden.idCliente == 0 ||
      this.orden.cantidad < 1 ||
      this.orden.fecha == null
    ) {
      Swal.fire('Campos vacios', `Todos los campos son obligatorios`, 'error');
      console.log(this.orden);
    } else {
      this.ordenService
        .create(this.orden)
        .subscribe((response) => Swal.fire({
          title: 'Producto añadido con éxito.',
          text: "¿Desea agregar un nuevo producto?",
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, añadir.',
          cancelButtonText: 'Volver al menú principal'
        }).then((result) => {
          if (result.isConfirmed) {
            this.limpiar();
          } else {
            this.return();
          }
        }));

    }
  }

  limpiar() {
    this.form.reset();
  };

  get idCliente() { return this.form.get('idCliente'); }
  get cantidad() { return this.form.get('cantidad'); }
  get fecha() { return this.form.get('fecha'); }

}
