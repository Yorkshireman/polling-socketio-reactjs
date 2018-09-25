import PropTypes from 'prop-types';
import React from 'react';

class Display extends React.Component {
  render() {
    return (this.props.if) ? <div>{this.props.children}</div> : null;
  }
}

Display.propTypes = {
  children: PropTypes.element,
  if: PropTypes.bool
};

export default Display;
