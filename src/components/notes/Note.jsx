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
        <div>
          <div className="flex align-top text-[#333]">
            <img
              src={note.author.avatar}
              alt={note.author.username}
              className=" h-10 w-10 mr-[1em] rounded-full shadow-[1px_1px_5px_0_rgba(5,61,84,0.45)]"
            />
            <div className='flex justify-between w-full'>
              <div className=" sw:min-w-[300px] mr-[1em]">
                <p className="">
                  <strong>{note.author.username}</strong>
                </p>
                <p className="text-[#666565] truncate-text p-2 pl-0 fm:min-w-[150px]">{note.content}</p>
              </div>
              <div className='relative'>
                <ToggleFavorite
                  id={note.id}
                  favoritedBy={note.favoritedBy}
                  count={note.favoriteCount}
                />
                {isCann ? <DeleteNote id={note.id} /> : ''}
              </div>
            </div>
          </div>
          <div>
            <div className='text-[#666565] pt-2 fm:text-[14px]'>
              <strong className='inline-block w-[110px]'>{date}</strong>
              <strong>{note.author.email}</strong>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};
export default Note;
