import { format } from 'date-fns';
import { Formik } from 'formik';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Sugar } from 'react-preloaders';
import Button from '../components/Button';
import EditNote from '../components/EditNote';

const NotePage = ({ data, isMy }) => {
  const [isEdit, setIsEdit] = useState(false);
  if (!data) return <Sugar color={'rgb(14 165 233)'} />;
  let dateCreate = format(new Date(data.note.createdAt), 'd MMM yyyy');
  let dateUpdate = format(new Date(data.note.updatedAt), 'd MMM yyyy');

  return (
    <div className="">
      <h2 className=" text-[24px] font-bold pb-3">
        {data.note.author.username}`s note.
      </h2>
      <hr className=" w-32 pb-3" />
      <div className=" flex items-center pb-5">
        <img
          src={data.note.author.avatar}
          alt={data.note.author.username}
          className=" h-15 rounded-[50%] mr-9"
        />
        <div>
          <p>
            Name: <b>{data.note.author.username}</b>
          </p>
          <p>
            Email: <b>{data.note.author.email}</b>
          </p>
        </div>
      </div>
      <h3 className=" pb-6  text-[20px]">Content:</h3>
      {isEdit? <EditNote setIsEdit={setIsEdit}/>:<div><div className=" border-2 border-solid rounded-2xl p-4 border-sky-500 relative mb-3">
        <div className=' flex justify-between items-center'>
          <span role="img" className="mr-2">
            &#128172;
          </span>
          <div> <span role="img" className="mr-2">
          &#128077;
          </span> <strong>{data.note.favoriteCount}</strong></div>
        </div>
        <ReactMarkdown children={data.note.content} />
        <div className="flex justify-end">
          Add: <b>{dateCreate}</b>, Update: <b>{dateUpdate}</b>
        </div>
      </div>
      {isMy? <div className="flex justify-end" ><Button onClick={()=>{
        setIsEdit(true);
      }}>Edit this note.</Button></div>:null}
      </div>
      }
    </div>
  );
};
export default NotePage;
