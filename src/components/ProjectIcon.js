import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/ProjectIcon.css';

class ProjectIcon extends Component {

  constructor( props ) {
    super( props );
    this.onClick = props.onClick;
  }

  render() {
    const innerText = "</>";

    return (
      <div className="ProjectIcon Container" onClick={this.onClick}>
        <div className="ProjectIcon" id="bulb">
          <p className="ProjectIcon">{innerText}</p>
        </div>
        <div className="ProjectIcon bulbBottom"></div>
        <div className="ProjectIcon bulbBottom"></div>
        <div className="ProjectIcon bulbBottom" id="last"></div>
      </div>
    );
  }

}

ProjectIcon.propTypes = {
  onClick: PropTypes.func
};

export { ProjectIcon };
