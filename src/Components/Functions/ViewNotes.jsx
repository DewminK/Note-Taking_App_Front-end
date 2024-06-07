import React from 'react';

const ViewNote = ({ notes }) => (
  <div>
    <h2>Notes</h2>
    <ul>
      {notes.map(note => (
        <li key={note.id}>
          <p>{note.id}</p>
          <h3>{note.header}</h3>
          <p>{note.description}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default ViewNote;
