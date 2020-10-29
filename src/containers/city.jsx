import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectCity } from '../actions/index';

class City extends Component { // A stateful component needs to
  constructor(props) { // be promoted into a class
    super(props);
    this.state = {}; // defines initial state
  }
  handleClick = () =>{
    this.props.selectCity(this.props.city);
  };
  render() {
    return (<li className="list-group-item" onClick={this.handleClick}>
      {this.props.city.name}</li>);
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);

