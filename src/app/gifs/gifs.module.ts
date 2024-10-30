import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PaginaGifsComponent } from './pagina-gifs/pagina-gifs.component';
import { ResultadosComponent } from './resultados/resultados.component';

@NgModule({
  declarations: [
    BusquedaComponent,
    PaginaGifsComponent,
    ResultadosComponent
  ],
  exports: [
    PaginaGifsComponent 
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
