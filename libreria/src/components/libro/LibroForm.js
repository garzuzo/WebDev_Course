import React, { Component } from 'react';


class LibroForm extends Component {




  constructor() {
    super();

    this.state = {
 id: "", name: "", author: "" 
    };
  }
  handleSubmit(e) {

    e.preventDefault();

    // console.log(this.refs);
    // let nuevoLibro = {

    //   name: this.refs.name.value,
    //   author: this.refs.author.value,
    // };

console.log(this.state);
let    libro={

      id:this.state.id,
      name:this.state.name,
      author:this.state.author,
    }
    this.props.handleNuevoLibro(libro);
  }


  componentWillReceiveProps(props){
    this.setState({
    id:props.libroEdit.id,
    name:props.libroEdit.name,
    author:props.libroEdit.author,
    });

  }

  handleOnChange(event) {
    this.setState({

        [event.target.name]:event.target.value
      

    });
  }
  render() {

    return (


      <div className="LibroForm">

        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="hidden" value={this.state.id} />
          <div className="form-group">
            <label htmlfor="name">Name</label>
            <input className="form-control" id="name" placeholder="Enter the name" name="name"  value={this.state.name} onChange={this.handleOnChange.bind(this)} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlfor="author">Author</label>
            <input className="form-control" id="author" placeholder="Enter the author" name="author" value={this.state.author} onChange={this.handleOnChange.bind(this)} />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default LibroForm;
