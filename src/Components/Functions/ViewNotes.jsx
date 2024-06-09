import React, { useState } from 'react';
import './Display.css';

const ViewNote = ({ notes }) => {
 // State to store the selected note ID and its description
  const [selectedNoteId, setSelectedNoteId] = useState('');
  const [selectedNoteDescription, setSelectedNoteDescription] = useState('');

  
  const handleSelectChange = (event) => {
    const noteId = event.target.value;
    setSelectedNoteId(noteId);

    
    const selectedNote = notes.find(note => note._id === noteId);
   
    setSelectedNoteDescription(selectedNote ? selectedNote.description : '');
  };

  return (
    <div>
      <div className="container">
      <table>
        <tr>
          <td>
          <select value={selectedNoteId} onChange={handleSelectChange}>
        <option value="">Select the Note</option>
        {notes.map(note => (
          <option key={note._id} value={note._id}>{note.header}</option>
        ))}
      </select>
          </td>
        </tr>
        <tr>
          <td>
          <textarea
        value={selectedNoteDescription}
        readOnly
        placeholder="Description"
      />
          </td>
        </tr>
      </table>
      </div>
    </div>
  );
};

export default ViewNote;
