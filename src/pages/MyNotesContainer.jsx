import React, { memo } from 'react';
import { useQuery } from '@apollo/client';
import { Sugar } from 'react-preloaders';
import { useEffect } from 'react';
import { GET_MY_NOTES } from '../utils/query';
import MyNotes from './MyNotes';

const MyNotesContainer = () => {
  let { loading, error, data, client } = useQuery(GET_MY_NOTES);
  useEffect(() => {
    if(data)  
    client.writeQuery({
      query: GET_MY_NOTES,
      data: {...data},
    });
  }, [data]);
  useEffect(() => {
    document.title = 'My Notes';
  }, []);
  if (loading) return <Sugar color={'rgb(14 165 233)'} />;
  if (error) return `Error! ${error.message}`;
  return (<MyNotes notes={data?data.me.notes:[]} />);

};
export default memo(MyNotesContainer);
