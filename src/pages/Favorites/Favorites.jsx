import React from 'react';
import NoteFeed from '../../components/notes/NoteFeed';

const Favorites = ({notes}) => {
  return (
    <div>
      <h1>Notedly</h1>
      <p>This is the home Favorites!</p>
      {(notes?.length > 0)?<NoteFeed notes={notes}/>:<p>No notes yet.</p>}
    </div>
  );
};
export default Favorites;
