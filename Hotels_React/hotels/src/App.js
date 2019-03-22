import React, { Component } from 'react';
import './App.css';
import Hotel from './components/Hotel';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class App extends Component {


  constructor(){
    super();
    this.state={hoteles:[],
      initialCenter:{
          lat: 40.854885,
          lng: -88.081807
        
      }
    }
  }
  componentWillMount(){
    fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json')
    .then(response=>response.json())
    .then(data=>this.setState({hoteles:data}))
  }


  render() {

    var hoteles=this.state.hoteles.map((hotel,index)=>(
<Hotel key={hotel.id} hotel={hotel} index={index}/>

    ));
    var markers=this.state.hoteles.map((hotel,index)=>(
      <Marker
      title={hotel.name}
      name={hotel.id}
      position={{lat:hotel.lat, lng: hotel.lng}} />
      
          ));
    return (
      
      <div className="container-fluid">
<div className="row">
<div className="col-sm-7">
<div className="row">
{hoteles}
</div>
</div>
<div className="col-sm-5">
<Map google={this.props.google} zoom={14} initialCenter={this.state.initialCenter}>
{markers}
</Map>

   </div> 
  </div>
 </div>
    
    );
  }
}

//export default App;
export default GoogleApiWrapper({
  apiKey: ("AIzaSyC5Zjsty7bsG-QbdyWfxviWEOmmSlXIecQ")
})(App)