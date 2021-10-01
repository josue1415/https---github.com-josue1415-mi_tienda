import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import Swal from 'sweetalert2';
import { Productos } from '../productos';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-form-prod',
  templateUrl: './form-prod.component.html',
  styleUrls: ['./form-prod.component.css']
})
export class FormProdComponent extends AppComponent implements OnInit {

  producto: Productos = new Productos();

  constructor(private formBuilder: FormBuilder, 
    private prodService: ProductosService, 
    location: Location) {
    super(location);
  }

  ngOnInit(): void {
  }

  frmProd = this.formBuilder.group({
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required, Validators.minLength(1)])
  });

  submit() {
    this.producto = this.frmProd.value;
    if (
      this.producto.nombre == '' ||
      this.producto.descripcion == '' ||
      this.producto.precio == null
    ) {
      Swal.fire('Campos vacios', `Todos los campos son obligatorios`, 'error');
      console.log(this.producto);
    } else {
      this.prodService
        .create(this.producto)
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
    this.frmProd.reset();
  };
}
