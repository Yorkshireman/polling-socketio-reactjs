import PropTypes from 'prop-types';
import React from 'react';

import Display from './parts/Display';

class Audience extends React.Component {
  render() {
    const { status } = this.props;
    return (
      <div>
        <Display if={status === 'connected'}>
          <h1>Join the session</h1>
        </Display>
      </div>
    );
  }
}

Audience.propTypes = {
  status: PropTypes.string
};

export default Audience;
