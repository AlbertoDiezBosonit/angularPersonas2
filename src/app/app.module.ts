import { Component, NgModule } from '@angular/core';
import { BrowserModule, enableDebugTools } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
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
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { MenuComponent } from './menu/menu.component';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { RectanglePersonComponent } from './rectangle-person/rectangle-person.component';


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
  },
  {
    path: 'rectangulo',
    component: PersonasInputComponent,
  }


]; 

 
 
@NgModule({
  exports: [
    RouterModule
    ],
  declarations: [
    AppComponent,
    PersonasInputComponent,
    PersonasOutputComponent,
    PersonaDetalleComponent,
    ReactivoDetallePersonaComponent,
    MessagesComponent,
    BienvenidoComponent,
    MenuComponent,
    RectanglePersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, {
      enableTracing: true, // for debug the routes
      paramsInheritanceStrategy: 'always' // heredar los datos de la ruta padre
      //,useHash: true // for server configuration routing
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
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
