import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/FeedIcon.css';

class FeedIcon extends Component {

  constructor( props ) {
    super( props );
    this.onClick = props.onClick;
  }

  render() {

    return (
      <div className="FeedIcon Container" onClick={this.onClick}>
        <div className="FeedIcon Box" id="first"></div>
        <div className="FeedIcon Box" id="second"></div>
        <div className="FeedIcon Box" id="third"></div>
      </div>
    );

  }

}

FeedIcon.propTypes = {
  onClick: PropTypes.func
};

export { FeedIcon };
