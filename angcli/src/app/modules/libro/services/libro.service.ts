import { Injectable } from '@angular/core';
import {Libro} from '../../../models/libro';

//firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LibroService {

  libroCollection:AngularFirestoreCollection<Libro>;
  libros:Observable<Libro[]>;


  constructor(private db: AngularFirestore) { 

    this.libroCollection=db.collection('libros');
this.libros=this.libroCollection.valueChanges();


  }

  getLibros():Observable<Libro[]>{
    return this.libros;
  }

  //add and set
  addLibro(libro:Libro){

    let id;
    if(!libro.id){

       id=this.db.createId();
    }else{

      id=libro.id;
    }

    let libroTmp={id,"name":libro.name,"author":libro.author}

  
    //con doc se trae el documento, es como un get
this.libroCollection.doc(id).set(libroTmp);
  }

  delLibro(libro:Libro){

    this.libroCollection.doc(libro.id).delete();
  }
}
