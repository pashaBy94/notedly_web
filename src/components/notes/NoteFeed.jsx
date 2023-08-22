import React from 'react';
import Note from './Note';

const NoteFeed = ({ notes }) => {
  return (
    <ul>
      {notes?.length > 0
        ? notes.map((note) => (
            <Note key={note.id} note={note} />
          ))
        : null}
    </ul>
  );
};
export default NoteFeed;
