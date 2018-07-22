import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/MailIcon.css';

class MailIcon extends Component {

  constructor( props ) {
    super( props );
    this.onClick = this.props.onClick;
  }

  render() {

    return (
      <div className="MailIcon Container" onClick={this.onClick}>
        <div className="MailIcon" id="stampOuter">
          <div className="MailIcon" id="stampInner">
          </div>
        </div>
        <p className="MailIcon Text" id="firstText">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <p className="MailIcon Text" id="secondText">
          &nbsp;&nbsp;&nbsp;&nbsp;
        </p>
      </div>
    )
  }

}

MailIcon.propTypes = {
  onClick: PropTypes.func
};

export { MailIcon };
