import React, { Component } from 'react';



class Hotel extends Component {




  render() {
   var style={
        background:`url(${this.props.hotel.imageUrl})`,
     
      }
    return (
      <div className="Hotel col-sm-6 img-thumbnail" style={style} >
      {this.props.hotel.name}-{this.props.hotel.price}
      
      </div>
    );
  }
}

export default Hotel;
