import React from 'react';
import io from 'socket.io-client';

import Header from './parts/Header';

class APP extends React.Component {
  constructor() {
    super();
    this.connect = this.connect.bind(this);
  }

  componentWillMount() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect);
  }

  connect() {
    alert('Connected: ' + this.socket.id);
  }

  render() {
    return (
      <div>
        <Header title="New Header" />
      </div>
    );
  }
}

export default APP;
