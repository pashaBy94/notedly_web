import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const var_li = 'no-underline font-bold text-1.1em text-[#333] visited:text-[#333] hover:text-sky-500 focus:text-sky-500';
  return (
    <nav className=' p-[1em] bg-[#f5f4f0] sm:pt-16 sw:fixed sw:w-[220px] h-[100%]'>
      <ul className=' m-0 p-0 list-none leading-loose'>
        <li>
          <Link to={'/'} className={var_li}><span role='img'>&#127968;</span> Home</Link>
        </li>
        <li>
          <Link to={'/favorites'} className={var_li}><span role={'img'}>&#11088;</span> Favorites</Link>
        </li>
        <li>
          <Link to={'/mynotes'} className={var_li}><span role={'img'}>&#128196;</span> My Notes</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;