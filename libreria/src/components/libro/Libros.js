import React, { Component } from 'react';
import LibroList from './LibroList';
import LibroForm from './LibroForm';
class Libros extends Component {


  constructor(){
    super();
    this.state={
    libros:[
      {id:1, name:"Kat", author:"GM"},
      {id:2, name:"Kati", author:"GM"},
      {id:3, name:"Kato", author:"GM"},
      {id:4, name:"Katu", author:"GM"},
    ],
   libroEdit: {id:"", name:"", author:""},
  };
  }
  agregarLibro(libro){
    let libros=this.state.libros;
    if(!libro.id){

    let id=Math.floor(Math.random()*10000)+1;
    libro.id=id;
 
    libros.push(libro);

  }else{

    let index=libros.findIndex( libroItem =>{return libroItem.id=libro.id});
 
    libros[index]=libro;
  }
    this.setState({
      libros: libros,
      libroEdit:{id:"",name:"",author:""}
    });
//console.log(this.props.libro);

  }

  editarLibro(libro){

    console.log(libro);
this.setState({

  libroEdit:libro
});

  }

  render() {
    return (
      <div className="Libros container mt-5">
  <h1>Librería {this.props.owner}</h1>
  <LibroList libros={this.state.libros} handleEditarLibro={this.editarLibro.bind(this)}/>
  <LibroForm handleNuevoLibro={this.agregarLibro.bind(this)} libroEdit={this.state.libroEdit}/>
      </div>
    );
  }
}

export default Libros;
