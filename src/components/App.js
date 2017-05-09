import React, { Component } from 'react';
import { Link } from 'react-router'
import NavLink from './NavLink'

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <span className="icn-logo"><i className="material-icons">code</i></span>
          <ul className="main-nav">
            <li><NavLink to="/" name="Home"></NavLink></li>
            <li><NavLink to="/about" name="About"></NavLink></li>
            <li><NavLink to="/teachers" name="Teachers"></NavLink></li>
            <li><NavLink to="/courses"name="Courses"></NavLink></li>
          </ul>
        </header>
        { this.props.children }
      </div>
    );
  }
}

export default App;
