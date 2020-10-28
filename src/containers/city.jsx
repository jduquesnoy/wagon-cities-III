import React, { Component } from 'react';

class City extends Component { // A stateful component needs to
 constructor(props) { // be promoted into a class
 super(props);
 this.state = {}; // defines initial state
 }

 render() {
  return (<li className="list-group-item">
            {this.props.city.name}</li>);
 }
}

export default City;