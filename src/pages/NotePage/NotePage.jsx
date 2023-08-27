import { format } from 'date-fns';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Button from '../../components/general/Button';
import EditNote from './EditNote';
import { BiMessage } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import Preloader from 'react-preloaders/lib/Preloader';
import ReactIcons from '../../hoc/ReactIcons';
const NotePage = ({ data, isMy, editNote }) => {
  const [isEdit, setIsEdit] = useState(false);
  if (!data) return <Preloader />;
  let dateCreate = format(new Date(data.note.createdAt), 'd MMM yyyy');
  let dateUpdate = format(new Date(data.note.updatedAt), 'd MMM yyyy');
  return (
    <div className="">
      <h2 className=" text-[24px] font-bold pb-3">
        {data.note.author.username}`s note.
      </h2>
      <hr className=" w-32 pb-3" />
      <div className=" flex items-center pb-5 pl-4">
        <img
          src={data.note.author.avatar}
          alt={data.note.author.username}
          className=" h-16 w-16 fw:w-24 fw:h-24 rounded-[50%] mr-9"
        />
        <div className="mr-5">
          <p>
            Name: <b>{data.note.author.username}</b>
          </p>
          <p>
            Email: <b>{data.note.author.email}</b>
          </p>
        </div>
        <div className=" vm:hidden">
          <ReactIcons
            element={BiMessage}
            col="#0EA5E9"
            cl="global-class-name"
            sz="4em"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-[20px] pl-4 font-bold">Content:</h3>
        <div className="relative">
          <ReactIcons
            element={AiFillStar}
            col="#F5CA1B"
            cl="global-class-name"
            sz="4em"
          />
          <span className=" absolute right-0 bottom-0 rounded-full bg-sky-500 p-2 w-6 h-6 leading-[10px] text-[10px] font-bold">
            {data.note.favoriteCount}
          </span>
        </div>
      </div>
      {isEdit ? (
        <EditNote
          editNote={editNote}
          id={data.note.id}
          setIsEdit={setIsEdit}
          content={data.note.content}
        />
      ) : (
        <div>
          <div className=" relative mb-3  pl-4">
            <div className="rounded-2xl rounded-ee-none shadow-[0_0_5px_0_rgba(14,165,233,0.45)] p-8 mb-5">
              <ReactMarkdown children={data.note.content} />
            </div>
            <div className="flex justify-end vm:text-[12px]">
              Add: <b>{dateCreate}</b>, Update: <b>{dateUpdate}</b>
            </div>
          </div>
          {isMy ? (
            <div className="">
              <Button
                onClick={() => {
                  setIsEdit(true);
                }}
              >
                Edit this note.
              </Button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};
export default NotePage;
