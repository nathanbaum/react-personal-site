import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Tooltip.css';

class Tooltip extends Component {
  constructor( props ) {
    super( props );

    this.name = props.name;
    this.description = props.description;
  }

  render() {
    return (
      <div className="Tooltip Wrapper">
        <div className="Tooltip Headline">{this.name}</div>
        <div className="Tooltip Description">{this.description}</div>
      </div>
    );
  }
}

Tooltip.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
}

export { Tooltip };
