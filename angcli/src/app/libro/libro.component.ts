import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';
import { LibroService } from '../services/libro.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  libroSelected: Libro;
  libros: Libro[];

  constructor(private libroService: LibroService) { }

  ngOnInit() {


    this.libroSelected = new Libro;
    this.libros = this.libroService.getLibros();
  }

  mostrarDetalle(libro: Libro) {
    this.libroSelected = libro;

  }
  eliminarDetalle(libro: Libro) {

    //let entry in vs. let entry of

    for (let entry in this.libros) {
    
     var libroAct=this.libros[entry];

      if (libroAct.id == libro.id) {

        var num=+entry;
        this.libros.splice(num,1);
       
        break;
      }

    }


  }

  reset(){


  }

  onSave(libro: Libro) {
if(!libro.id){


  libro.id=Math.floor(Math.random()*200)+10;
  this.libros.push(libro);
}

  }

}
