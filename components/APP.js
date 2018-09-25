import React from 'react';
import { Route } from 'react-router-dom';
import io from 'socket.io-client';

import Audience from './Audience';
import Board from './Board';
import Header from './parts/Header';
import Speaker from './speaker';

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

  renderRoutes(state) {
    return (
      <main>
        <Route exact={true} path='/' render={() => (
          <Audience {...state} />
        )} />
        <Route path='/board' component={Board} />
        <Route path='/speaker' render={() => (
          <Speaker {...state} />
        )} />
      </main>
    );
  }

  render() {
    const { status, title } = this.state;
    return (
      <div>
        <Header status={status} title={title} />
        {this.renderRoutes(this.state)}
      </div>
    );
  }
}

export default APP;
