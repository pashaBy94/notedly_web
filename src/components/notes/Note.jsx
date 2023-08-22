import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import DeleteNote from './DeleteNote';
import ToggleFavorite from './ToggleFavorite';

const Note = ({ note }) => {
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
            <ToggleFavorite id={note.id} favoritedBy={note.favoritedBy} count={note.favoriteCount}/>
          </div>
          {isCann ? <DeleteNote id={note.id} /> : ''}
          {/* <ReactMarkdown children={note.content} /> */}
        </div>
      </Link>
    </li>
  );
};
export default Note;
