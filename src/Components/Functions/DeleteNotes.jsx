import React, { useState } from 'react';
import './Display.css';

const DeleteNote = ({ notes }) => {
  const [id, setId] = useState('');

  const handleSelectChange = (e) => {
    setId(e.target.value);
  };

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
      <div className="container">
      <form onSubmit={deleteNote}>
        <table>
          <tr>
            <td>
              <select value={id} onChange={handleSelectChange}>
                <option value="">Select the Note</option>
                {notes.map(note => (
                  <option key={note._id} value={note._id}>{note.header}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <button type="submit">Delete the Note</button>
            </td>
          </tr>
        </table>
      </form>
      </div>
    </div>
  );
};

export default DeleteNote;
