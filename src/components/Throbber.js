import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Throbber.css';

class Throbber extends Component {

  render() {
    return (
      <div className="Throbber Outer"><div className="Throbber Inner"></div></div>
    );
  }

}

export { Throbber };
