import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service.service';


@Component({
  selector: 'app-barra-vertical',
  templateUrl: './barra-vertical.component.html',
  styleUrls: ['./barra-vertical.component.css']
})

export class SidebarComponent {

  get historial() {
    return this.gifsService.historial;
  }
  
  constructor( private gifsService: GifsService ) { }

  buscar( termino: string ) {
    this.gifsService.buscarGifs(termino)
  }

  
}