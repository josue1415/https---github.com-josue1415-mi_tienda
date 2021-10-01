import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field"


import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { SizeDirectiveDirective } from './size-directive.directive';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Principal component
import { MainTiendaComponent } from './main/main/main.component';

// Clientes components
import { MainClientesComponent } from './clientes/main/main/main.component';
import { FormComponent } from './clientes/form/form/form.component';
import { ShowComponent } from './clientes/show/show/show.component';
import { PhonePipe } from './phone.pipe';
import { NitPipe } from './nit.pipe';
import { FormOrdenesComponent } from './ordenes/form/form-ordenes.component';
import { ShowOrdenesComponent } from './ordenes/show/show-ordenes.component';
import { ShowProdComponent } from './productos/show-prod/show-prod.component';
import { FormProdComponent } from './productos/form-prod/form-prod.component';
import { MainProdComponent } from './productos/main-prod/main-prod.component';

const routes: Routes = [
  { path: '', component: MainTiendaComponent },
  // { path: 'clientes', component: MainComponent },
  { path: 'clientes/agregar', component: FormComponent },
  { path: 'clientes/:id', component: ShowComponent },
  { path: 'productos/agregar', component: FormProdComponent },
  { path: 'productos/:id', component: ShowProdComponent },
  { path: 'ordenes/agregar', component: FormOrdenesComponent },
  { path: 'ordenes/:id', component: ShowOrdenesComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    MainTiendaComponent,
    MainClientesComponent,
    FormComponent,
    ShowComponent,
    PhonePipe,
    NitPipe,
    SizeDirectiveDirective,
    FormOrdenesComponent,
    ShowOrdenesComponent,
    ShowProdComponent,
    FormProdComponent,
    MainProdComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
