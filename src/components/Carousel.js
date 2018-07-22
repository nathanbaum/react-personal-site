import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../css/Carousel.css';

class Carousel extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      index: 0
    };
  }

  setIndex( i ) {
    this.setState( () => {
      return { index: i };
    });
  }

  getChildren() {
    const kids = [];
    for( const child in this.props.children ) {
      kids.push(
        <div key={child} className="ChildWrapper">
          {this.props.children[child]}
        </div>
      );
    }
    return kids;
  }

  render() {
    let columns = "";
    for ( const c of this.props.children ) {
      columns+="100vw ";
    }
    columns = columns.trim();

    const style = {
      transition: '.3s',
      display: 'grid',
      gridTemplateColumns: columns,
      transform: 'translateX( -' + (100*this.state.index) + 'vw )',
    };

    console.log(this.props.children);

    return (
      <div style={ style } className="Carousel">
        {this.getChildren()}
      </div>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.array
};

export { Carousel };
