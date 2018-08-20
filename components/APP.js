import React from 'react';
import io from 'socket.io-client';

import Header from './parts/Header';

class APP extends React.Component {
  constructor() {
    super();

    this.state = {
      status: 'disconnected',
      title: ''
    };

    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.welcome = this.welcome.bind(this);

    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect);
    this.socket.on('welcome', this.welcome);
  }

  connect() {
    this.setState({ status: 'connected' });
  }

  disconnect() {
    this.setState({ status: 'disconnected' });
  }

  welcome(serverState) {
    this.setState({ title: serverState.title });
  }

  render() {
    const { status, title } = this.state;
    return (
      <div>
        <Header status={status} title={title} />
      </div>
    );
  }
}

export default APP;
