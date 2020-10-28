import React, { Component } from 'react';

import City from './city';

class CityList extends Component { // A stateful component needs to
  constructor(props) { // be promoted into a class
    super(props);
    this.state = {}; // defines initial state
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

export default CityList;