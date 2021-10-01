import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';
// import { Location } from '@angular/common';
import { Clientes } from '../../clientes';
import { ClientesService } from '../../clientes.service';
import { AppComponent } from 'src/app/app.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent extends AppComponent implements OnInit {

  cliente: Clientes = new Clientes();

  constructor(private clienteService: ClientesService, location: Location) {
    super(location);
  }

  ngOnInit(): void {

  }

  phonePattern = "[0-9]{4}-[0-9]{4}";
  nitPattern = "[0-9]{4}-[0-9]{6}-[0-9]{3}-[0-9]{1}";

  formCliente = new FormGroup({
    id: new FormControl('', [Validators.required,
    Validators.minLength(1)]),

    nombres: new FormControl('', [Validators.required,
    Validators.minLength(5),
    Validators.maxLength(100)]),

    apellidos: new FormControl('', [Validators.required,
    Validators.minLength(5),
    Validators.maxLength(100)]),

    telefono: new FormControl('', [Validators.required,
    Validators.minLength(9),
    Validators.pattern(this.phonePattern)]),

    correo: new FormControl('', [Validators.required,
    Validators.email]),

    nit: new FormControl('', [Validators.required,
    Validators.minLength(17),
    Validators.pattern(this.nitPattern)])
  });


  submit() {
    this.cliente = this.formCliente.value;
    console.log(this.formCliente.controls['id'].setValue(this.cliente.id + '.'));
    console.log(this.formCliente.controls['nombres'].setValue(this.cliente.nombres + '.'));
    console.log(this.formCliente.controls['apellidos'].setValue(this.cliente.apellidos + '.'));

    if (
      this.cliente.nombres == '' ||
      this.cliente.apellidos == '' ||
      this.cliente.telefono == '' ||
      this.cliente.correo == '' ||
      this.cliente.nit == ''
    ) {
      Swal.fire('Campos vacios', `Todos los campos son obligatorios`, 'error');
    } else {
      this.clienteService
        .create(this.cliente)
        .subscribe((response) => Swal.fire({
          title: 'Cliente añadido con éxito.',
          text: "¿Desea agregar un nuevo cliente?",
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
    this.formCliente.reset();
  };

  get nombres() { return this.formCliente.get('nombres'); }
  get apellidos() { return this.formCliente.get('apellidos'); }
  get telefono() { return this.formCliente.get('telefono'); }
  get correo() { return this.formCliente.get('correo'); }
  get nit() { return this.formCliente.get('nit'); }

}
