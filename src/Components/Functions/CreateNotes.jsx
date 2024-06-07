import React, { useState } from 'react';

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const createNote = async (e) => {
    e.preventDefault();
    const newNote = { header: title, description :content };

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
      alert('Note Created Successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Note not Created.');

    }
  };

  return (
    <div>
      <h1>Create a New Note</h1>
      <form onSubmit={createNote}>
        <div>
          <label for="title">Note Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="title" required />
        </div>
        <div>
          <label for="content">Note Content</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} id="content" required placeholder="Note Content"></textarea>
        </div>
        <button type="submit">Create the Note</button>
      </form>
    </div>
  );
};

export default CreateNote;
