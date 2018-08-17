import React from 'react';
import io from 'socket.io-client';

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
    return <h1>Hello, World! From React</h1>;
  }
}

export default APP;
