import React, { useState } from 'react';
import { useEffect } from 'react';
import { gql, useApolloClient, useMutation } from '@apollo/client';
import { Sugar } from 'react-preloaders';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
import { Navigate, useNavigate } from 'react-router-dom';
import NewNote from './NewNote';
import { GET_NOTE, GET_NOTES, IS_LOG, NEW_NOTE } from '../utils/query';

loadDevMessages();
loadErrorMessages();
const NewNoteContainer = () => {
  //   const client = useApolloClient();
  const [errors, setErrors] = useState('');
  const navigate = useNavigate();


  let [newNote, { loading, error, client }] = useMutation(NEW_NOTE, {
    // refetchQueries: [{query: GET_NOTES}],
    onCompleted:  (data) => {
      client.writeQuery({
        query: GET_NOTE,
        data: { note: data.newNote },
        variables: {
          id: data.newNote.id,
        },
      });
       client.cache.reset();
       client.writeQuery({
        query: IS_LOG,
        data: {
          isLog: true,
        }
      });
      navigate(`/note/${data.newNote.id}`);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  useEffect(() => {
    document.title = 'New Note - Notedly';
  }, []);
  if (loading) return <Sugar color={'rgb(14 165 233)'} />;
  if (error) console.log(error.message);
  return <NewNote newNote={newNote} />;
};
export default NewNoteContainer;
