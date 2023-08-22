import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NotePage from './NotePage';
import { useApolloClient, useQuery, useMutation } from '@apollo/client';
import { GET_NOTE } from '../../utils/query';
import Preloader from '../../components/general/Preloader';
import { EDIT_NOTE } from '../../utils/mutation';

const NotePageContainer = (props) => {
  let params = useParams();
  const client = useApolloClient();
  const [isMy, setIsMy] = useState(false);
  let id = params.id;
  let { loading, error, data } = useQuery(GET_NOTE, {variables:{id}});
  let [editNote, { loading: editsLoading, error: editsError, data: editsData }] = useMutation(EDIT_NOTE, {
    onCompleted: (data) => {
       client.writeQuery({
        query: GET_NOTE,
        data: { note: editsData.updateNote },
        variables: {
          id: editsData.updateNote.id,
        },
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });
  useEffect(()=>{
    let myId = localStorage.getItem('me_id');
    if (data){
      if(data.note.author.id === myId){
        setIsMy(true)
      }
    }
  });
  if (loading ) return <Preloader />;
  if (error) return `Error! ${error.message}`;
  return <NotePage data={data} isMy={isMy} editNote={editNote}/>;
};
export default NotePageContainer;
