import { Component } from '@angular/core';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-RickyMortyApp-II--CR';

  articulos:any = null;

  constructor(private articulosService: ArticulosService) {}

  ngOnInit(){
    this.articulosService
    .retornar()
    .subscribe((articulo) =>  (this.articulos = articulo));

  }
}

