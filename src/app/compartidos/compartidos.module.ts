import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './barra-vertical/barra-vertical.component';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CompartidosModule { }
