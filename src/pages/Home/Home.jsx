import React from 'react';
import Button from '../../components/general/Button';
import NoteFeed from '../../components/notes/NoteFeed';

const Home = ({ notes, hasNextPage, refetch, cursor }) => {
  return (
    <div>
      <p>This is the home page!</p>
      <NoteFeed notes={notes}/>
      {hasNextPage?<Button onClick={()=>refetch({cursor})}>Load more</Button>:null}
    </div>
  );
};
export default Home;
