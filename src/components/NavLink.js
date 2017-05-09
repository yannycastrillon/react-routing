import React, { Component } from 'react';
import { Link } from 'react-router';

const NavLink = props => (
  <Link {...props} activeClassName="active">{props.name}</Link>

);

export default NavLink;
