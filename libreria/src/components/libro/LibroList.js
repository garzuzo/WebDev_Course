import React, { Component } from 'react';
import LibroItem from './LibroItem';
class LibroList extends Component {

  handleEditLibro(libro){
this.props.handleEditarLibro(libro);
    console.log(libro);
  }
  
  render() {
    console.log(this.props.libros);
    let libroList = this.props.libros.map(
      (libroTmp) =>(<LibroItem key={libroTmp.id} libro={libroTmp} handleEditLibro={this.handleEditLibro.bind(this)}/>)

    );
    return (


      <div className="LibroList">
        <table className="table">
          <thead>
         <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Author</th>
            <th scope="col">Acciones</th>
         </tr>
          </thead>
          <tbody>
          {libroList}
          </tbody>
        </table>
      </div>
    );
  }
}

export default LibroList;
