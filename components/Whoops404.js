import React from 'react';
import { Link } from 'react-router-dom';

class Whoops404 extends React.Component {
  render() {
    return (
      <div id="not-found">
        <h1>Whoops...</h1>
        <p>
          We cannot find the page that you have requested.
          Were you looking for one of these:
        </p>
        <Link to="/">Join as Audience</Link><br/>
        <Link to="/speaker">Start the presentation</Link><br/>
        <Link to="/board">View the board</Link>
      </div>
    );
  }
}

export default Whoops404;
