import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Sugar } from 'react-preloaders';
import { GET_MY_FAVORITES } from '../../utils/query';
import Note from './Note';

const NoteFeed = ({ notes }) => {
  const [favoritesMy, setFavoritesMy] = useState('');
  const [getMyFavorites, { data, loading, error}] = useLazyQuery(GET_MY_FAVORITES);
  useEffect(()=>{
    getMyFavorites();
  },[]);
  useEffect(()=>{
    if(data)
    setFavoritesMy(data.me.favorites)
  },[data]);
  if (loading) return <Sugar color={'rgb(14 165 233)'} />;
  if(error) console.log(error);
  return (
    <ul>
      {notes?.length > 0? notes.map((note) =><Note key={note.id} favoritesMy={favoritesMy} note={note} />): null}
    </ul>
  );
};
export default NoteFeed;
