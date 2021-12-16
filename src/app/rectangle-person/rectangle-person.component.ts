import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { PersonaOutput } from '../personaOutput';


@Component({
  selector: 'app-rectangle-person',
  templateUrl: './rectangle-person.component.html',
  styleUrls: ['./rectangle-person.component.css']
})
export class RectanglePersonComponent implements OnInit {

  constructor() { }

  @Input('persona') // le introducimos esta desde el padre desde el html
  persona!:PersonaOutput;

  // generamos eventos para mandarselo al padre, el padre es el padre en el DOM del html
  @Output() borrarEvento = new EventEmitter<PersonaOutput>(); 
  @Output() editarEvento = new EventEmitter<PersonaOutput>();

  ngOnInit(): void {
  }

  borrar(){
    this.borrarEvento.emit(this.persona); // emitimos el evento al padre
  }

  editar(){
    this.editarEvento.emit(this.persona);
  }

}
 