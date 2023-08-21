import { useApolloClient } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Sugar } from 'react-preloaders';
import { GET_MY, GET_MY_FAVORITES_NOTE } from '../../utils/query';
import Note from './Note';

const NoteFeed = ({ notes }) => {
  const [favoritesMy, setFavoritesMy] = useState('');
  const client = useApolloClient();
  const noteCache = client.readQuery({
    query: GET_MY_FAVORITES_NOTE
  });  
  useEffect(()=>{
  },[]);
  useEffect(()=>{
    if(noteCache){
    setFavoritesMy(noteCache.favorites);
  }
  });
  return (
    <ul>
      {notes?.length > 0? notes.map((note) =><Note key={note.id} favoritesMy={favoritesMy || []} note={note} />): null}
    </ul>
  );
};
export default NoteFeed;
