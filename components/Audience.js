import PropTypes from 'prop-types';
import React from 'react';

class Audience extends React.Component {
  render() {
    const { title } = this.props;
    return (<h1>Audience : {title}</h1>);
  }
}

Audience.propTypes = {
  title: PropTypes.string
};

export default Audience;
