import { gql, useApolloClient, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import Button from '../components/Button';
import NoteFeed from '../components/notes/NoteFeed';

const Home = ({ notes, hasNextPage, getAndPaintNotes, cursor }) => {
  return (
    <div>
      <p>This is the home page!</p>
      <NoteFeed notes={notes}/>
      {hasNextPage?<Button onClick={()=>getAndPaintNotes(cursor)}>Load more</Button>:null}
    </div>
  );
};
export default Home;
