import { useMutation } from '@apollo/client';
import React from 'react';
import { DELETE_NOTE } from '../../utils/mutation';
import { GET_MY_NOTES, GET_NOTES } from '../../utils/query';
import { TiDeleteOutline } from 'react-icons/ti';
import ReactIcons from '../../hoc/ReactIcons';

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
        className=" absolute top-[90%] hover:animate-wiggle"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          deleteNote({ variables: { id } });
        }}
      >
        <ReactIcons
          element={TiDeleteOutline}
          col="#EF4444"
          cl="global-class-name"
          sz="2em"
        />
      </button>
    </div>
  );
};
export default DeleteNote;
