import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Sugar } from 'react-preloaders';
import { useEffect } from 'react';
import { GET_MY_FAVORITES_NAMES, GET_MY_FAVORITES } from '../utils/query';
import Favorites from './Favorites';

const FavoritesContainer = () => {
  const { loading, error, data, client } = useQuery(GET_MY_FAVORITES_NAMES);
  let [noteFeed, setNotes] = useState([]);
  useEffect(() => {
    document.title = 'Favorites';
  }, []);
  useEffect(() => {
    if (data !== undefined && data?.me?.favorites?.length > 0) {
      setNotes(data.me.favorites);
    }
  }, [data]);
  if (loading && noteFeed.length === 0) return <Sugar color={'rgb(14 165 233)'} />;
  if (error) return `Error! ${error.message}`;
  return <Favorites notes={noteFeed} />;
};
export default FavoritesContainer;
