import { Component, NgModule } from '@angular/core';
import { BrowserModule, enableDebugTools } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonasInputComponent } from './personas-input/personas-input.component';
import { PersonasOutputComponent } from './personas-output/personas-output.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PersonaDetalleComponent } from './persona-detalle/persona-detalle.component';

 


import { MatDialogModule } from '@angular/material/dialog';
import { ReactivoDetallePersonaComponent } from './reactivo-detalle-persona/reactivo-detalle-persona.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'AppComponent'
  },
  {
    path: 'visualizacion_tabla',
    component: PersonasOutputComponent,
  },
  {
    path: 'visualizacion_rectangulos',
    component: DashboardComponent,
  }


];

 

@NgModule({
  exports: [
    RouterModule
    ],
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonasInputComponent,
    PersonasOutputComponent,
    PersonaDetalleComponent,
    ReactivoDetallePersonaComponent,
    MessagesComponent,
    BienvenidoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, {
      enableTracing: true, // for debug the routes
      paramsInheritanceStrategy: 'always', // heredar los datos de la ruta padre
      useHash: true // for server configuration routing
    }),
    HttpClientModule,
    MatSliderModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
