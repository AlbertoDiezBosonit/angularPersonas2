import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PersonaOutput } from '../personaOutput';
import { PersonasService } from '../personas.service';


@Component({
  selector: 'app-reactivo-detalle-persona',
  templateUrl: './reactivo-detalle-persona.component.html',
  styleUrls: ['./reactivo-detalle-persona.component.css']
})
export class ReactivoDetallePersonaComponent implements OnInit {

  constructor(private formBuilder : FormBuilder,public dialogRef: MatDialogRef<ReactivoDetallePersonaComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: PersonaOutput
    ,private personasService : PersonasService) { }

  registerForm = this.formBuilder.group({
    user: [''], // valores por defecto
    surname: [''],
    password: [''],
    name : [''],
    company_email: [''],
    personal_email: [''],
    city: [''],
    active: [''],
    created_date: [''],
    imagen_url: [''],
    termination_date: ['']
  });

  ngOnInit(): void {
  }

  submit(d?: PersonaOutput){
    alert(d);
 
    //alert('se envia');
    //this.data=this.registerForm.value;
    //this.personasService.InsertaPersona(this.data,aux,this.tabla1,this.personas);
    // hay que tener ahora presente lo que hay que hacer
    this.data={ // estos son los valores por defecto
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
    };
    this.dialogRef.close();
  }

  cancelar() {
    this.dialogRef.close();
  }

}
 