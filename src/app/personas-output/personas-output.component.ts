import { AfterViewInit, ChangeDetectorRef, Component, OnInit,ViewChild } from '@angular/core';
import { PersonaOutput } from '../personaOutput';
import { PersonasService } from '../personas.service';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { PersonaDetalleComponent } from '../persona-detalle/persona-detalle.component'
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-personas-output',
  templateUrl: './personas-output.component.html',
  styleUrls: ['./personas-output.component.css']
})
export class PersonasOutputComponent implements OnInit {

  page_size : number = 5;
  page_number : number = 1;
  pageSizeOptions = [5,10,20,50,100];

  handlePage(e: PageEvent){
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }


  constructor(private personasService : PersonasService,public dialog: MatDialog) { }

  dataSource = new MatTableDataSource<PersonaOutput>();

  ngOnInit(): void {
    this.getPersonas(); // es el lugar indicado de inicializarlo
    
  }

  columnsToDisplay: string[]  = ['user', 'name','surname','company_email','borrar','modificar','detalle'];
  personas : PersonaOutput[]=[];
  @ViewChild(MatTable)
  tabla1!: MatTable<PersonaOutput[]>;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  

  getPersonas():void{
    this.personasService.getPersonasOutput()
      .subscribe(personas => {
        this.personas = personas;
        this.dataSource = new MatTableDataSource<PersonaOutput>(this.personas);
        this.dataSource.paginator=this.paginator;


        /*this.personas=[];
        for(let i=this.page_size*this.page_number;i<((this.page_size+1)*this.page_number);i++) 
          this.personas.push(personas[i]);*/
      });
  }

  anadir():void{
    // NOTA: hay que recordar que el email tiene que estar "correcto"
    let aux:PersonaOutput={
      id: '',
      user: '',
      password: '',
      name: '',
      surname: '',
      company_email: '',
      personal_email: '',
      city: '',
      imagen_url: '',
      termination_date: '',
      created_date: '',
      active: ''
    }; // así inicializamos a uno vacío
    //aux={...this.personas[0]};
    this.personasService.setEditable(true);
    let dialogo1 = this.dialog.open(PersonaDetalleComponent,{data: aux});
    dialogo1.afterClosed().subscribe(data => {
      if (data != undefined){ // se le da a cancelar o no
        this.dataSource.data=this.personas;
        this.personasService.InsertaPersona(data,aux,this.tabla1,this.personas);
      }
    });
  }

  buscar():void{
    const textoAbuscar = (document.getElementById("aBuscar") as HTMLInputElement).value;
    if(textoAbuscar!=''){
      this.personasService.getPersonasOutputPorNombre(textoAbuscar)
        .subscribe(personas => this.personas = personas);
      this.dataSource.data=this.personas;
      this.tabla1.renderRows();
    }
    else{ // si es una cadena vacía ponemos otra vez todas
      this.getPersonas();
    }   
  }

  
  /*recarga(){
    alert("se recarga");
    this.getPersonas();
    this.tabla1.renderRows();
  }*/


  borrarFila(j:number){
    let aBorrar=this.dataSource.data[j];
    j=this.personas.indexOf(aBorrar);
    if (confirm("Realmente quiere borrarlo?")) {
        this.personasService.EliminaPersonas(/*this.personas[j].id*/aBorrar.id,this.personas,j,this.tabla1,this.dataSource,this.paginator);
    }
  }

  modificarFila(j:number){
    let aux:PersonaOutput={...this.personas[j]}; // así clonamos el elemento
    this.personasService.setEditable(true);
    let dialogo1 = this.dialog.open(PersonaDetalleComponent,{data: aux});
    dialogo1.afterClosed().subscribe(data => {
      if (data != undefined){ // se le da a cancelar o no
        this.personasService.ActualizaPersona(data,this.personas,j,this.tabla1,this.dataSource,this.paginator);
      }
    });
  }
  
  detalleFila(j:number){  
    let aux={...this.personas[j]}; // así clonamos el elemento, en este caso tal vez no haría falta
    this.personasService.setEditable(false);
    let dialogo1 = this.dialog.open(PersonaDetalleComponent,{data: aux});
  }



}
