import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtro-front',
  templateUrl: './filtro-front.component.html',
  styleUrls: ['./filtro-front.component.css']
})
export class FiltroFrontComponent implements OnInit {

  @Input('texto')
  texto!:string;

  @Output() changed:EventEmitter<string>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  buscar(){
    const textoAbuscar = (document.getElementById("aBuscar2") as HTMLInputElement).value;
    //alert(textoAbuscar);
    this.changed.emit(textoAbuscar);
  }
}
