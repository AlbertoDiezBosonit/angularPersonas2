import { Component, OnInit } from '@angular/core';
import { PersonaOutput } from '../personaOutput';
import { PersonasService } from '../personas.service';
import { PersonaDetalleComponent } from '../persona-detalle/persona-detalle.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-personas-input',
  templateUrl: './personas-input.component.html',
  styleUrls: ['./personas-input.component.css']
})
export class PersonasInputComponent implements OnInit {

  constructor(private personasService : PersonasService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  personas : PersonaOutput[]=[];

  getPersonas():void{
    this.personasService.getPersonasOutput()
      .subscribe(personas => this.personas = personas);
  }

  borrarUsuario(evento:PersonaOutput){
    if (confirm("Realmente quiere borrarlo?")) {
      this.personasService.EliminaPersonas(evento.id,this.personas,this.personas.findIndex(x => x.id === evento.id));
    }
  }

  editarUsuario(evento:PersonaOutput){
    let aux:PersonaOutput={...evento}; // así clonamos el elemento
    this.personasService.setEditable(true);
    let dialogo1 = this.dialog.open(PersonaDetalleComponent,{data: aux});
    dialogo1.afterClosed().subscribe(data => {
      if (data != undefined){ // se le da a cancelar o no
        this.personasService.ActualizaPersona(data,this.personas,this.personas.findIndex(x => x.id === evento.id));
      }
    });
  }

}
