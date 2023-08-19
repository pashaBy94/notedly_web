import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import DeleteNote from '../DeleteNote';
import { TOGGLE_FAVORITE } from '../../utils/query';
import ToggleFavorite from '../ToggleFavorite';

const Note = ({ note, favoritesMy }) => {
  console.log(favoritesMy);
  let date = format(new Date(note.createdAt), 'd MMM yyyy');
  const [isCann, setIsCann] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('me_id') === note.author.id) setIsCann(true);

  }, []);
  return (
    <li className=" box-border max-w-[800px] my-0 mx-auto mb-[1em] p-[1em] border-2 border-solid border-transparent border-b-2 transition-all duration-300 border-b-slate-100 hover:border-sky-500 hover:rounded-2xl cursor-pointer">
      <Link to={`/note/${note.id}`} className="">
        <div className="py-6 fw:flex fw:items-top ">
          <img
            src={note.author.avatar}
            alt={note.author.username}
            className=" h-10 pr-[1em]"
          />
          <p className="pr-[1em] text-[#333] ">
            {note.content}, {date}, {note.author.username}, {note.author.email}
          </p>
          <div>
            {' '}
            <ToggleFavorite id={note.id} favoritesMy={favoritesMy} count={note.favoriteCount}/>
            {/* <button onClick={(ev)=>{
              ev.preventDefault();
              // ev.stopPropagation();
            }}>
              <span role="img" className="mr-2 p-1 bg-slate-200">
                &#128077;
              </span>
            </button>{' '}
            <strong>{note.favoriteCount}</strong> */}
          </div>
          {isCann ? <DeleteNote id={note.id} /> : ''}
          {/* <ReactMarkdown children={note.content} /> */}
        </div>
      </Link>
    </li>
  );
};
export default Note;
