import React, { Component } from 'react';
// src/containers/flat_list.jsx
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions'; 

import City from './city';

class CityList extends Component { // A stateful component needs to
  // constructor(props) { // be promoted into a class
  //   super(props);
  //   this.state = {}; // defines initial state
  //}
  componentWillMount() {
    this.props.setCities();
    }

  render() {
    return (
      <ul>
        {this.props.cities.map((city) => {
          return <City key={city.name} city={city} />;
        })}
      </ul>
    );
  }
}
   function mapStateToProps(state) {
    return {
    cities: state.cities
    };
   }

   function mapDispatchToProps(dispatch) {
    return bindActionCreators(
    {setCities},dispatch);
   } 


export default connect(mapStateToProps, mapDispatchToProps)(CityList);
