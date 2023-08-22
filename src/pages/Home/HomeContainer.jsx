import React  from 'react';
import Home from './Home';
import {  useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { GET_NOTES } from '../../utils/query';
import Preloader from '../../components/general/Preloader';

const HomeContainer = () => {
  let { loading, error, data, refetch } = useQuery(GET_NOTES);
  useEffect(() => {
    document.title = 'Homes';
    return ()=>{}
  }, []);

  if (loading) return <Preloader />;
  if (error) return `Error! ${error.message}`;
  return (
    <>
      {data ? (
        <Home
          notes={data.noteFeed.notes}
          refetch={refetch}
          cursor={data.noteFeed.cursor}
          hasNextPage={data.noteFeed.hasNextPage}
        />
      ) : (
        <Home
          notes={[]}
          refetch={refetch}
          cursor={''}
          hasNextPage={false}
        />
      )}
    </>
  );
};
export default HomeContainer;
