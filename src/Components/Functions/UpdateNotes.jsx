import React, { useState } from 'react';
import './Display.css';

const UpdateNote = ({ notes }) => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSelectChange = (e) => {
    setId(e.target.value);

    const selectedNote = notes.find(note => note._id === e.target.value);
    setTitle(selectedNote ? selectedNote.header : '');
    setContent(selectedNote ? selectedNote.description : '');
  };

  const updateNote = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/notes/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ header: title, description: content }),
      });

      if (!response.ok) {
        throw new Error('Failed to update the note');
      }

      const result = await response.json();
      console.log(result);

      setId('');
      setTitle('');
      setContent('');
      alert('Note Updated Successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Note not found. Please check the ID');
    }
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={updateNote}>
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
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New Title (Optional)" />
              </td>
            </tr>
            <tr>
              <td>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Edited Note (Optional)"></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <button type="submit">Edit the Note</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
};

export default UpdateNote;
