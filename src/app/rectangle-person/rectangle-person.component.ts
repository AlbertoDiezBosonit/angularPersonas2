import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { PersonaOutput } from '../personaOutput';
import { PersonasOutputComponent } from '../personas-output/personas-output.component';

@Component({
  selector: 'app-rectangle-person',
  templateUrl: './rectangle-person.component.html',
  styleUrls: ['./rectangle-person.component.css']
})
export class RectanglePersonComponent implements OnInit {

  constructor() { }

  @Input('persona')
  persona!:PersonaOutput;

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
 