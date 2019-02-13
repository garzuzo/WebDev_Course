import { Component, OnInit, Input } from '@angular/core';
import { Libro } from '../models/libro';

@Component({
  selector: 'app-libro-detail',
  templateUrl: './libro-detail.component.html',
  styleUrls: ['./libro-detail.component.css']
})
export class LibroDetailComponent implements OnInit {


  @Input() libro: Libro;


  constructor() { }

  ngOnInit() {
  }

}
