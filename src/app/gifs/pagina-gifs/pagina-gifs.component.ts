import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service.service';


@Component({
  selector: 'app-pagina-gifs',
  templateUrl: './pagina-gifs.component.html',
  styleUrls: [
  ]
})
export class PaginaGifsComponent {

  get historial() {
    return this.gifsService.historial;
  }
  
  constructor( private gifsService: GifsService ) { }

  buscar( termino: string ) {
    this.gifsService.buscarGifs(termino)
  }

}
