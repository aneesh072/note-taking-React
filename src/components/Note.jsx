import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
  return (
    <div className="note">
      <span> Hello this is our first Note</span>
      <div className="note-footer">
        <small>12/04/2022</small>
        <MdDeleteForever className="delete-icon" size="1.2em" />
      </div>
    </div>
  );
};

export default Note;
