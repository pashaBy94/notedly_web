import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../components/general/ScrollToTop';
import NoteFeed from '../../components/notes/NoteFeed';
import { AiFillPlusCircle } from 'react-icons/ai';
import ReactIcons from '../../hoc/ReactIcons';

const MyNotes = ({ notes, scroll, parentScroll }) => {
  return (
    <div>
      <h1 className="text-[24px] font-bold text-[#333]">My notes</h1>
      <Link to={'/newnote'}>
        <div className=" fixed fw:top-[15px] top-[15px] left-[calc(50%-44px)] z-[100] ">
          <ReactIcons
            element={AiFillPlusCircle}
            col="#0EA5E9"
            cl="global-class-name"
            sz="6em"
          />
        </div>
      </Link>
      {notes?.length > 0 ? <NoteFeed notes={notes} /> : <p>No notes yet.</p>}
      <ScrollToTop scroll={scroll} parentScroll={parentScroll} />
    </div>
  );
};
export default MyNotes;
