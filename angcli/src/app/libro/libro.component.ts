import { Component, OnInit } from '@angular/core';
import {Libro} from '../models/libro';
import {LibroService} from '../services/libro.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  libroSelected:Libro;
libros:Libro[];

  constructor(private libroService:LibroService) { }

  ngOnInit() {
    

    this.libroSelected=new Libro;
    this.libros =this.libroService.getLibros();
  }

  mostrarDetalle(libro:Libro){
this.libroSelected=libro;

  }

}
