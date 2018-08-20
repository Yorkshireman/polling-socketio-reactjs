import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { status, title } = this.props;
    return (
      <header className="row">
        <div className="col-10">
          <h1>{title}</h1>
        </div>
        <div className="col-2">
          <span id="connection-status" className={status}></span>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  status: PropTypes.string,
  title: PropTypes.string.isRequired
};

Header.defaultProps = {
  status: 'disconnected'
};

export default Header;
