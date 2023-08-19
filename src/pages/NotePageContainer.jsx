import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NotePage from './NotePage';
import { useLazyQuery, useApolloClient, useQuery, useMutation } from '@apollo/client';
import { Sugar } from 'react-preloaders';
import { EDIT_NOTE, GET_MY, GET_NOTE, IS_LOG } from '../utils/query';

const NotePageContainer = (props) => {
  let params = useParams();
  const client = useApolloClient();
  const [isMy, setIsMy] = useState(false);
  const [local, setLocal] = useState({ data: '', loading: true });
  let id = params.id;
  let [getNote, { loading, error, data }] = useLazyQuery(GET_NOTE);
  let [editNote, { loading: editsLoading, error: editsError, data: editsData }] = useMutation(EDIT_NOTE, {
    onCompleted: (data) => {
      console.log(data.updateNote);
       client.cache.reset();
       client.writeQuery({
       query: IS_LOG,
       data: {
         isLog: true,
       }
     });
       client.writeQuery({
        query: GET_NOTE,
        data: { note: data.updateNote },
        variables: {
          id: data.updateNote.id,
        },
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });
  useEffect(() => {
    const noteCache = client.readQuery({
      query: GET_NOTE,
      variables: {
        id,
      },
    });
    if (noteCache === null) getNote({ variables: { id } });
    else setLocal({ data: noteCache, loading: false });
  }, []);
  useEffect(()=>{
    let myId = localStorage.getItem('me_id');
    if (data){
      if(data.note.author.id === myId){
        setIsMy(true)
      }
    } else if (local.data){
      if(local.data.note.author.id === myId){
        setIsMy(true)
      }
    }
  },[data, local.data]);
  console.log(isMy);
  if (loading && local.loading) return <Sugar color={'rgb(14 165 233)'} />;
  if (error) return `Error! ${error.message}`;
  return <NotePage data={data || local.data} isMy={isMy} editNote={editNote}/>;
};
export default NotePageContainer;
