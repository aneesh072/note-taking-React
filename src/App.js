import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note',
      date: '30/08/2022',
    },
    {
      id: nanoid(),
      text: 'This is my second note',
      date: '30/08/2022',
    },
    {
      id: nanoid(),
      text: 'This is my third note',
      date: '30/08/2022',
    },
  ]);
  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
