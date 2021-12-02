import { Component, OnInit, ViewChild } from '@angular/core';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  menu() {
    //console.log(this.trigger);
    this.trigger.openMenu();
  }

  irAtabla(){
    //alert("aqui");
    // now it is time to go to table view
    this.router.navigateByUrl('tabla');
  }

  irAcomponentes(){
    this.router.navigateByUrl('rectangulo');
  }

}
