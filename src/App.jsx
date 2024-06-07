import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Components/Functions/Menu';
import CreateNote from './Components/Functions/CreateNotes';
import UpdateNote from './Components/Functions/UpdateNotes';
import DeleteNote from './Components/Functions/DeleteNotes';
import ViewNote from './Components/Functions/ViewNotes';
import useFetch from './hooks/useFetch';

function App() {
  const { data: notes, pending: pendingNotes, error: errorNotes } = useFetch("http://localhost:5000/notes");

  if (pendingNotes) return <div>Loading notes...</div>;
  if (errorNotes) return <div>Error: {errorNotes}</div>;

  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/create" element={<CreateNote />} />
          <Route path="/update" element={<UpdateNote notes={notes} />} />
          <Route path="/delete" element={<DeleteNote notes={notes} />} />
          <Route path="/view" element={<ViewNote notes={notes} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
