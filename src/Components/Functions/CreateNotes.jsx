import React, { useState } from 'react';
import './Display.css';

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const createNote = async (e) => {
    e.preventDefault();
    const newNote = { header: title, description: content };

    try {
      const response = await fetch('http://localhost:5000/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNote),
      });
      if (!response.ok) {
        throw new Error('Failed to create the note');
      }
      const result = await response.json();
      console.log(result);

      setTitle('');
      setContent('');
      alert('Note Saved');
    } catch (error) {
      console.error('Error:', error);
      alert('Note not Created.');
    }
  };

  return (
    <div>
      <div className="container">
      <form onSubmit={createNote}>
        <table>
            <tr>
              <td>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  id="title"
                  required
                  placeholder='Title'
                />
              </td>
            </tr>
            <tr>
              <td>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  id="content"
                  required
                  placeholder="Description"
                ></textarea>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit">Save the Note</button>
              </td>
            </tr>
          
        </table>
      </form>
      </div>
    </div>
  );
};

export default CreateNote;
