import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { MdMenu } from 'react-icons/md';
import { BiHomeAlt } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
import { MdSpeakerNotes } from 'react-icons/md';

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
              <IconContext.Provider
                value={{
                  color: '#0EA5E9',
                  className: 'global-class-name',
                  size: '2em',
                }}
              >
                <BiHomeAlt />
              </IconContext.Provider>
            </div>
            <span>Home</span>
          </Link>
        </li>
        <li className="border-b-2 border-dotted border-[#333] last:border-b-0 py-2 transition ease-in-out delay-150 duration-300 hover:bg-[rgba(207,233,245,0.25)]">
          <Link to={'/favorites'} className={var_li}>
            <div className="mr-2">
              <IconContext.Provider
                value={{
                  color: '#0EA5E9',
                  className: 'global-class-name',
                  size: '2em',
                }}
              >
                <AiOutlineStar />
              </IconContext.Provider>
            </div>
            <span>Favorites</span>
          </Link>
        </li>
        <li className="border-b-2 border-dotted border-[#333] last:border-b-0 py-2 transition ease-in-out delay-150 duration-300 hover:bg-[rgba(207,233,245,0.25)]">
          <Link to={'/mynotes'} className={var_li}>
            <div className="mr-2">
              <IconContext.Provider
                value={{
                  color: '#0EA5E9',
                  className: 'global-class-name',
                  size: '2em',
                }}
              >
                <MdSpeakerNotes />
              </IconContext.Provider>
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
        <IconContext.Provider
          value={{
            color: '#0EA5E9',
            className: 'global-class-name',
            size: '2em',
          }}
        >
          <MdMenu />
        </IconContext.Provider>
      </div>
    </nav>
  );
};
export default Navigation;
