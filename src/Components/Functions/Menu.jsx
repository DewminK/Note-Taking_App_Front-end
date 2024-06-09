import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div>
    <nav className="body">

      <ul>
        <li><Link to="/create">Add a Note</Link></li>
        <li><Link to="/update">Edit a Note</Link></li>
        <li><Link to="/delete">Delete a Note</Link></li>
        <li><Link to="/view">View Notes</Link></li>
      </ul>
    </nav>
  </div>
);

export default Menu;
