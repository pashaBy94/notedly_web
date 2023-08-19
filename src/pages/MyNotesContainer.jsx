import React, { useState } from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { Sugar } from 'react-preloaders';
import { useEffect } from 'react';
import { GET_MY_FAVORITES_NAMES, IS_LOG } from '../utils/query';
import MyNotes from './MyNotes';

const MyNotesContainer = () => {

  let [getMyNote ,{ loading, error, data }] = useLazyQuery(GET_MY_FAVORITES_NAMES);
  let [noteFeed, setNotes] = useState([]);
  useEffect(() => {
    document.title = 'My Notes';
    getMyNote();
  }, []);
  useEffect(() => {
    if(data !== undefined){
        setNotes(data.me.notes);
    }
  }, [data]);
  if (loading && noteFeed.length === 0) return <Sugar color={'rgb(14 165 233)'} />;
  if (error) return `Error! ${error.message}`;
  return (<MyNotes notes={noteFeed} />);

};
export default MyNotesContainer;
