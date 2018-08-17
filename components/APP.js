import React from 'react';
import io from 'socket.io-client';

import Header from './parts/Header';

class APP extends React.Component {
  constructor() {
    super();
    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.state = { status: 'disconnected' };
  }

  componentWillMount() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect);
  }

  connect() {
    this.setState({ status: 'connected' });
  }

  disconnect() {
    this.setState({ status: 'disconnected' });
  }

  render() {
    const { status } = this.state;
    return (
      <div>
        <Header status={status} title="New Header" />
      </div>
    );
  }
}

export default APP;
