import React from 'react';
import { Link } from 'react-router-dom';
import NoteFeed from '../../components/notes/NoteFeed';


const MyNotes = ({notes}) => {
  return (
    <div>
      <h1>Notedly</h1>
      <p>This is the home MyNotes!</p>
      {(notes?.length > 0)?<NoteFeed notes={notes}/>:<p>No notes yet.</p>}
      <Link to={'/newnote'}>Write note</Link>
    </div>
  );
};
export default MyNotes;
