import React, { Component } from 'react';

import { connect } from "react-redux";

class ActiveCity extends Component { // A stateful component needs to
  constructor(props) { // be promoted into a class
    super(props);
    this.state = {}; // defines initial state
  }
  render() {
    if (!this.props.activeCity) {
      return (
        <div className="active-city">
          <p>Select a city...</p>
        </div>
      );
    }
    return (
      <div className="active-city">
        <h3>{this.props.activeCity.name}</h3>
        <p>{this.props.activeCity.address}</p>
        <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`} width="100%"/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
