import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TablaComponent } from './tabla.component';


const routes: Routes = [
  { path: '', component: TablaComponent }
];

@NgModule({
  declarations: [
    TablaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TablaModule { }
