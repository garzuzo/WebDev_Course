import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Libro } from '../models/libro';

@Component({
  selector: 'app-libro-detail',
  templateUrl: './libro-detail.component.html',
  styleUrls: ['./libro-detail.component.css']
})
export class LibroDetailComponent implements OnInit {

  @Output() guardar = new EventEmitter<Libro>();
  @Input() libro: Libro;

    didVote = false;
   
    onGuardar(libro:Libro) {
      if(libro.name && libro.author){

        this.guardar.emit(libro);
this.reset();
      }
 
    }

    reset(){
      this.libro=new Libro();
    }

  constructor() { }

  ngOnInit() {
  }

}
