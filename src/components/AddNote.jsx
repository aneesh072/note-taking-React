import React, { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');

  const handleChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleSave = () => {
    handleAddNote(noteText);
    setNoteText('')
  };
  return (
    <div className="note new">
      <textarea
        rows="8"
        clos="10"
        placeholder="Type to add a note"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>200 Remaining</small>
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
