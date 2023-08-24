import { useMutation } from '@apollo/client';
import React from 'react';
import { DELETE_NOTE } from '../../utils/mutation';
import { GET_MY_NOTES, GET_NOTES } from '../../utils/query';
import { IconContext } from 'react-icons';
import { TiDeleteOutline } from 'react-icons/ti';

const DeleteNote = ({ id }) => {
  let [deleteNote] = useMutation(DELETE_NOTE, {
    refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES }],
    onError: (err) => {
      console.log(err);
    },
  });
  return (
    <div>
      <button
      className=' absolute top-[90%] hover:animate-wiggle'
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          deleteNote({ variables: { id } });
        }}
      >
        <IconContext.Provider
          value={{
            color: '#EF4444',
            className: 'global-class-name',
            size: '2em',
          }}
        >
          <TiDeleteOutline />
        </IconContext.Provider>
      </button>
    </div>
  );
};
export default DeleteNote;
