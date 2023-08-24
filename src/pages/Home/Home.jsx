import React from 'react';
import Button from '../../components/general/Button';
import NoteFeed from '../../components/notes/NoteFeed';
import ScrollToTop from '../../components/general/ScrollToTop';

const Home = ({
  notes,
  hasNextPage,
  refetch,
  cursor,
  scroll,
  parentScroll,
}) => {
  return (
    <div>
      <h1 className="text-[24px] font-bold text-[#333]">All notes</h1>
      <NoteFeed notes={notes} />
      {hasNextPage ? (
        <Button onClick={() => refetch({ cursor })}>Load more</Button>
      ) : null}
      <ScrollToTop scroll={scroll} parentScroll={parentScroll} />
    </div>
  );
};
export default Home;
