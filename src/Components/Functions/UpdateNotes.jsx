import React, { useState } from 'react';

const UpdateNote = ({ notes }) => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const updateNote = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/notes/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
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
      <h1>Update a Note</h1>
      <form onSubmit={updateNote}>
        <div>
          <label htmlFor="id">Note Id:</label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} id="id" required />
        </div>
        <div>
          <label htmlFor="title">New Note Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="title" />
        </div>
        <div>
          <label htmlFor="content">New Note Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} id="content" placeholder="Note Content"></textarea>
        </div>
        <button type="submit">Update the Note</button>
      </form>
    </div>
  );
};

export default UpdateNote;
