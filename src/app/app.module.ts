import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';
import { ChildaComponent } from './first/childa/childa.component';
import { ChildbComponent } from './first/childb/childb.component';
import { first } from 'rxjs';
import { FirstComponent } from './first/first.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponentComponent,
    FormComponent,
    GridComponent,
    ChildaComponent,
    ChildbComponent,
    FirstComponent,
    CustomerComponent,
    OrdersComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
