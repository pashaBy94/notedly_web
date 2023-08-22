import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
import { useNavigate } from 'react-router-dom';
import NewNote from './NewNote';
import { GET_MY_NOTES, GET_NOTE, GET_NOTES } from '../../../utils/query';
import Preloader from '../../../components/general/Preloader';
import { NEW_NOTE } from '../../../utils/mutation';

loadDevMessages();
loadErrorMessages();
const NewNoteContainer = () => {
  const navigate = useNavigate();


  let [newNote, { loading, error, client }] = useMutation(NEW_NOTE, {
    refetchQueries: [{query: GET_NOTES}, {query: GET_MY_NOTES}],
    onCompleted:  (data) => {
      client.writeQuery({
        query: GET_NOTE,
        data: { note: data.newNote },
        variables: {
          id: data.newNote.id,
        },
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
  if (loading) return <Preloader />;
  if (error) console.log(error.message);
  return <NewNote newNote={newNote} />;
};
export default NewNoteContainer;
