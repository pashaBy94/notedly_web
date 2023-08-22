import React, { memo } from 'react';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { GET_MY_NOTES } from '../../utils/query';
import MyNotes from './MyNotes';
import Preloader from '../../components/general/Preloader';

const MyNotesContainer = () => {
  let { loading, error, data, client } = useQuery(GET_MY_NOTES);
  useEffect(() => {
    if(data)  
    client.writeQuery({
      query: GET_MY_NOTES,
      data: {...data},
    });
  });
  useEffect(() => {
    document.title = 'My Notes';
  }, []);
  if (loading && data === undefined) return <Preloader />;
  if (error) return `Error! ${error.message}`;
  return (<MyNotes notes={data?data.me.notes:[]} />);

};
export default memo(MyNotesContainer);
