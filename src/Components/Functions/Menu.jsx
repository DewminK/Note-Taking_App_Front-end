import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div>
    <h1>Menu</h1>
    <nav>
      <ul>
        <li><Link to="/create">Create Note</Link></li>
        <li><Link to="/update">Update Note</Link></li>
        <li><Link to="/delete">Delete Note</Link></li>
        <li><Link to="/view">View Notes</Link></li>
      </ul>
    </nav>
  </div>
);

export default Menu;
