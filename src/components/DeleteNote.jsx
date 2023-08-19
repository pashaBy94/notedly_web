import { useMutation } from '@apollo/client';
import React from 'react';
import { DELETE_NOTE, IS_LOG } from '../utils/query';

const DeleteNote = ({ id }) => {
  let [deleteNote, { client }] = useMutation(DELETE_NOTE, {
    onCompleted: (data) => {
      client.cache.reset();
      client.writeQuery({
        query: IS_LOG,
        data: {
          isLog: true,
        },
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        deleteNote({ variables: { id } });
      }}
      className="block p-4 border-none rounded-md text-lg text-white bg-sky-500 cursor-pointer hover:opacity-80 active:bg-sky-800"
    >
      X
    </button>
  );
};
export default DeleteNote;
