import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonaOutput } from '../personaOutput';
import { PersonasService } from '../personas.service';
import { PersonaDetalleComponent } from '../persona-detalle/persona-detalle.component'
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-personas-input',
  templateUrl: './personas-input.component.html',
  styleUrls: ['./personas-input.component.css']
})
export class PersonasInputComponent implements OnInit {

  constructor(private personasService : PersonasService,public dialog: MatDialog) { }

  page_size : number = 5;
  page_number : number = 1;
  pageSizeOptions = [5,10,20,50,100];

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  handlePage(e: PageEvent){
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  ngOnInit(): void {
    this.getPersonas();
  }

  personas : PersonaOutput[]=[];

  getPersonas():void{
    this.personasService.getPersonasOutput()
      .subscribe(personas => this.personas = personas);
    //this.personas.slice(0,this.personas.length/2);
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
