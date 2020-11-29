import { CarsComponent } from './cars.component';
import { CarsRoutingModule } from './cars-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { NbCardModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    CarsComponent,
    CarsListComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    Ng2SmartTableModule,
    NbCardModule
  ]
})
export class CarsModule { }
