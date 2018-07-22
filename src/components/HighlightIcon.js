import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/HighlightIcon.css';



class HighlightIcon extends Component {

  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div className="HighlightIcon Container">
        <a className="HighlightIcon Anchor" href={this.props.link}>
          <img className="HighlightIcon Image Black" src={this.props.black}/>
          <img className="HighlightIcon Image Purple" src={this.props.highlight}/>
        </a>
      </div>
    );
  }
}

//<a className="HighlightIcon Anchor" href={this.props.link}>

HighlightIcon.propTypes = {
  black: PropTypes.string,
  highlight: PropTypes.string,
  link: PropTypes.string,
};

export { HighlightIcon };
