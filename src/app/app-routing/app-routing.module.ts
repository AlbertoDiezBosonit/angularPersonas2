import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { PersonasOutputComponent } from '../personas-output/personas-output.component';
import { PersonasInputComponent } from '../personas-input/personas-input.component';

import { BienvenidoComponent } from '../bienvenido/bienvenido.component';

// este es el routes que funciona
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'bienvenido'
  },
  {
    path: 'bienvenido',
    component: BienvenidoComponent
  },
  {
    path: 'tabla',
    component: PersonasOutputComponent,
    //loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'rectangulo',
    component: PersonasInputComponent,
  }
]; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { } 
