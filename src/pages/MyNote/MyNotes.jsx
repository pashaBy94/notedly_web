import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../components/general/ScrollToTop';
import NoteFeed from '../../components/notes/NoteFeed';
import { IconContext } from 'react-icons';
import { AiFillPlusCircle } from 'react-icons/ai';

const MyNotes = ({ notes, scroll, parentScroll }) => {
  return (
    <div>
      <h1 className="text-[24px] font-bold text-[#333]">My notes</h1>
      <Link to={'/newnote'}>
        <div className=' fixed fw:top-[15px] top-[15px] left-[calc(50%-44px)] z-[100] '>
          <IconContext.Provider
            value={{
              color: '#0EA5E9',
              className: 'global-class-name',
              size: '6em',
            }}
          >
            <AiFillPlusCircle />
          </IconContext.Provider>
        </div>
      </Link>
      {notes?.length > 0 ? <NoteFeed notes={notes} /> : <p>No notes yet.</p>}
      <ScrollToTop scroll={scroll} parentScroll={parentScroll} />
    </div>
  );
};
export default MyNotes;
