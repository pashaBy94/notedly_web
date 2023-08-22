import React, { memo } from 'react';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { GET_MY_FAVORITES_NOTE } from '../../utils/query';
import Favorites from './Favorites';
import Preloader from '../../components/general/Preloader';

const FavoritesContainer = () => {
  const { loading, error, data } = useQuery(GET_MY_FAVORITES_NOTE);

  useEffect(() => {
    document.title = 'Favorites';
  }, []);
 
  if (loading && data === undefined) return <Preloader />;
  if (error) return `Error! ${error.message}`;
  return <Favorites notes={data?data.me.favorites:[]} />;
};
export default memo(FavoritesContainer);
