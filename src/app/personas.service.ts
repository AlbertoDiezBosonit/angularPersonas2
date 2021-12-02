import { Injectable } from '@angular/core';
import { PersonaOutput } from './personaOutput';
import { Observable, of } from 'rxjs'; // para llamadas asincronas
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { MatTable } from '@angular/material/table';
import { MessageService } from './message.service'; // para ir metiendo los mensajes

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private Url = 'http://localhost:8080/persona';  // URL to web api
  private editable:boolean=true;

  constructor( private http: HttpClient,private messageService: MessageService) { }

  getEditable(){
    return this.editable;
  }

  setEditable(editable:boolean){
    this.editable=editable;
  }

  getPersonasOutput(): Observable< PersonaOutput[]> {
    let retorno=this.http.get<PersonaOutput[]>(this.Url)
    .pipe( // esto es para la gestion de errores
      catchError(this.handleError<PersonaOutput[]>('getHeroes', []))
    );// luego queda hacer el suscribe
    //retorno.subscribe(ps => {alert(personas );personas = ps; alert(personas ); tabla1.renderRows();});
    this.messageService.add('Personas leidas');
    return retorno;
  }

  getPersonasOutputPorNombre(nombre : string): Observable< PersonaOutput[]> {
    let retorno= this.http.get<PersonaOutput[]>(this.Url+'/nombre/'+nombre)
    .pipe( // esto es para la gestion de errores
      catchError(this.handleError<PersonaOutput[]>('getHeroes', []))
    );
    this.messageService.add('Se busca por nombre');
    return retorno;
  }

  status:string ='';

  InsertaPersona(p:PersonaOutput,aux:PersonaOutput,tabla1: MatTable<PersonaOutput[]>,personas : PersonaOutput[]){
    this.status='';
    //p.user=''; // con esto generamos un error
    let retorno=this.http.post<PersonaOutput>(this.Url+"/addPersona",p).pipe(
      catchError(this.handleError('addPersona', p))
    )
    .subscribe(data => {
      if(this.status!=''){    
        //alert('Error al insertar la línea');
        alert(this.status);
      }
      else{
        p.id = data.id; // aceptamos la id asignada en la base de datos        
        personas.push(aux);
        tabla1.renderRows();
        this.messageService.add('Se inserta una persona');
      }
    })
    return retorno;
  }

  ActualizaPersona(p:PersonaOutput, aCambiar : PersonaOutput[],j:number, tabla1: MatTable<PersonaOutput[]> | undefined = undefined){
    this.status='';
    return this.http.put<PersonaOutput>(this.Url+'/'+p.id,p)
      .pipe(        catchError(this.handleError<PersonaOutput[]>('Error al actualizar la línea', []))      )
      .subscribe((data) =>{ 
        if(this.status!=''){
          //alert('Error al actualizar la fila');
          alert(this.status);
        }
        else{
          aCambiar[j]=p;
          if(tabla1 != undefined)
            tabla1.renderRows();
          this.messageService.add('Se inserta la persona: '+p.name);
        }
      }
      );
  }

  EliminaPersonas(id : string,personas : PersonaOutput[] = [],j:number = -1,tabla1: MatTable<PersonaOutput[]> | undefined = undefined) {
    this.status='';
    let retorno= this.http.delete(this.Url+'/'+id).pipe(catchError(this.handleError<PersonaOutput>('Error al borrar persona')))
    //.pipe(      catchError(this.handleError<PersonaOutput[]>('Error al eliminar la línea', []))    )
    .subscribe( (data)=>{ 
        if(data===undefined){
          //alert("Error al eliminar la fila");
          alert(this.status);
        }
        else{
          if(j!=-1){
            this.messageService.add('Se elimina la persona: '+personas[j].name);
            personas.splice(j,1);
          }
          else
            this.messageService.add('Se elimina a la persona con id: '+id)
          
          if(tabla1 != undefined)
            tabla1.renderRows();        
        }
      }
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //alert(error);
      //alert("error: "+`${operation} failed: ${error.message}`);
      // TODO: send the error to remote logging infrastructure
      this.status="error: "+`${operation} failed: ${error.message}`;
      if(error.error.mensaje!=undefined){
        //alert(error.error.mensaje);    
        this.status="El error de la respuesta del servidor es: "+error.error.mensaje;
      }
      console.error(error.error.mensaje); // log to console instead
      
      
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message} respuesta del servidor: ${error.error.mensaje}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`Service: ${message}`);
  }
  
}
