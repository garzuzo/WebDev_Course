import React, { Component } from 'react';
import Libros from './components/libro/Libros';


class App extends Component {
  render() {
    var owner='Johnatan';
    return (

      
      <div className="App">
  <Libros owner={owner}/>
      </div>
    );
  }
}

export default App;
