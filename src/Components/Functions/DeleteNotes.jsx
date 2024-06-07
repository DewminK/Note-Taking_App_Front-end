import React, { useState } from 'react';

const DeleteNote = ({ notes }) => {
  const [id, setId] = useState('');

  const deleteNote = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/notes/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete the note');
      }

      console.log('Note deleted');

      setId('');
      alert('Note Deleted Successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Note not found. Please check the ID');
    }
  };

  return (
    <div>
      <h1>Delete a Note</h1>
      <form onSubmit={deleteNote}>
        <div>
          <label htmlFor="id">Note Id:</label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} id="id" required />
        </div>
        <button type="submit">Delete the Note</button>
      </form>
    </div>
  );
};

export default DeleteNote;
