import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { BiHomeAlt } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
import { MdSpeakerNotes } from 'react-icons/md';
import ReactIcons from '../hoc/ReactIcons';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const var_li =
    'no-underline font-bold text-1.1em flex text-[#333] visited:text-[#333] transition ease-in-out duration-300 hover:text-sky-500 focus:text-sky-500 from-sky-500';
  return (
    <nav className=" p-[1em] pb-0 bg-[#f5f4f0] sm:pt-16 sw:fixed sw:w-[220px] h-[100%] shadow-[0_0_5px_0_rgba(14,165,233,0.25)]">
      <ul
        className={`${
          !open ? 'hidden' : 'block'
        } sw:block m-0 p-0 list-none leading-loose`}
        onClick={() => setOpen(false)}
      >
        <li className="border-b-2 border-dotted border-[#333] last:border-b-0 py-2 transition ease-in-out delay-150 duration-300 hover:bg-[rgba(207,233,245,0.25)]">
          <Link
            to={'/'}
            className="no-underline font-bold text-1.1em flex text-[#333] visited:text-[#333] hover:text-sky-500 focus:text-sky-500 "
          >
            <div className="mr-2">
              <ReactIcons
                element={BiHomeAlt}
                col="#0EA5E9"
                cl="global-class-name"
                sz="2em"
              />
            </div>
            <span>Home</span>
          </Link>
        </li>
        <li className="border-b-2 border-dotted border-[#333] last:border-b-0 py-2 transition ease-in-out delay-150 duration-300 hover:bg-[rgba(207,233,245,0.25)]">
          <Link to={'/favorites'} className={var_li}>
            <div className="mr-2">
              <ReactIcons
                element={AiOutlineStar}
                col="#0EA5E9"
                cl="global-class-name"
                sz="2em"
              />
            </div>
            <span>Favorites</span>
          </Link>
        </li>
        <li className="border-b-2 border-dotted border-[#333] last:border-b-0 py-2 transition ease-in-out delay-150 duration-300 hover:bg-[rgba(207,233,245,0.25)]">
          <Link to={'/mynotes'} className={var_li}>
            <div className="mr-2">
              <ReactIcons
                element={MdSpeakerNotes}
                col="#0EA5E9"
                cl="global-class-name"
                sz="2em"
              />
            </div>
            <span>My notes</span>
          </Link>
        </li>
      </ul>
      <div
        onClick={() => setOpen(true)}
        className={` ${
          open ? 'hidden' : 'block'
        } sw:hidden cursor-pointer border-b-2 border-dotted border-[#333] last:border-b-0 py-2 transition ease-in-out delay-150 duration-300 hover:bg-[rgba(207,233,245,0.25)]`}
      >
        <ReactIcons
          element={MdMenu}
          col="#0EA5E9"
          cl="global-class-name"
          sz="2em"
        />
      </div>
    </nav>
  );
};
export default Navigation;
