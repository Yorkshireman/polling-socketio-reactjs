import PropTypes from 'prop-types';
import React from 'react';

class Speaker extends React.Component {
  render() {
    const { status } = this.props;
    return (<h1>Speaker : {status}</h1>);
  }
}

Speaker.propTypes = {
  status: PropTypes.string
};

export default Speaker;
