import { Component, OnInit, OnDestroy } from '@angular/core';
import { Libro } from '../../models/libro';
import { LibroService } from '../../services/libro.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit, OnDestroy {

  libroSelected: Libro;
  libros: Libro[];
private subscription: Subscription[]=[];

  constructor(private libroService: LibroService) { 

    this.libros=[];
    
  }

  ngOnDestroy():void{
  
    this.subscription.forEach((s:Subscription)=>
    
s.unsubscribe()

    );
  }


  ngOnInit() {


    this.libroSelected = new Libro;
    this.subscription.push(this.libroService.getLibros().subscribe(
     librosDb=>this.libros=librosDb

   ));
  }

  mostrarDetalle(libro: Libro) {
    this.libroSelected = libro;

  }
  eliminarDetalle(libro: Libro) {

    //let entry in vs. let entry of

    /*
    for (let entry in this.libros) {
    
     var libroAct=this.libros[entry];

      if (libroAct.id == libro.id) {

        var num=+entry;
        this.libros.splice(num,1);
       
        break;
      }

    }
*/
this.libroService.delLibro(libro);

  }

  reset(){


  }


  onSave(libro: Libro) {



  libro.id=String(Math.floor(Math.random()*200)+10);
  this.libroService.addLibro(libro);


  }

}
