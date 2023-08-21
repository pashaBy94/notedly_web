import React, { memo } from 'react';
import { useQuery } from '@apollo/client';
import { Sugar } from 'react-preloaders';
import { useEffect } from 'react';
import { GET_MY_FAVORITES_NOTE } from '../utils/query';
import Favorites from './Favorites';

const FavoritesContainer = () => {
  const { loading, error, data, client } = useQuery(GET_MY_FAVORITES_NOTE);
  useEffect(() => {
    if(data)  
    client.writeQuery({
      query: GET_MY_FAVORITES_NOTE,
      data: {...data},
    });
  }, [data]);
  useEffect(() => {
    document.title = 'Favorites';
  }, []);
  if (loading) return <Sugar color={'rgb(14 165 233)'} />;
  if (error) return `Error! ${error.message}`;
  return <Favorites notes={data?data.me.favorites:[]} />;
};
export default memo(FavoritesContainer);
