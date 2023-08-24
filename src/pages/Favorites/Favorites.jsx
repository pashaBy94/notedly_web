import React from 'react';
import ScrollToTop from '../../components/general/ScrollToTop';
import NoteFeed from '../../components/notes/NoteFeed';

const Favorites = ({notes, scroll, parentScroll }) => {
  return (
    <div>
      <h1 className="text-[24px] font-bold text-[#333]">Favorites</h1>
      {(notes?.length > 0)?<NoteFeed notes={notes}/>:<p>No notes yet.</p>}
      <ScrollToTop scroll={scroll} parentScroll={parentScroll} />
    </div>
  );
};
export default Favorites;
