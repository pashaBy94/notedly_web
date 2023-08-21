import React  from 'react';
import Home from './Home';
import {  useQuery } from '@apollo/client';
import { Sugar } from 'react-preloaders';
import { useEffect } from 'react';
import { GET_NOTES } from '../utils/query';

const HomeContainer = () => {
  let { loading, error, data, refetch } = useQuery(GET_NOTES);
  useEffect(() => {
    document.title = 'Home';
  }, []);
  if (loading) return <Sugar color={'rgb(14 165 233)'} />;
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
