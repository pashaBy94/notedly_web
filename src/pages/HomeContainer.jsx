import React, { useState } from 'react';
import Home from './Home';
import { useLazyQuery } from '@apollo/client';
import { Sugar } from 'react-preloaders';
import { useEffect } from 'react';
import { GET_NOTES } from '../utils/query';

const HomeContainer = () => {

  let [getNotes, { loading, error, data }] = useLazyQuery(GET_NOTES);
  let [hasNextPage, setHasNextPage] = useState(false);
  let [cursor, setCursor] = useState('');
  let [noteFeed, setNotes] = useState('');
  const getAndPaintNotes = (cursor) => {
    getNotes({variables:{cursor:cursor}});
  };
  useEffect(() => {
    document.title = 'Home';
    getAndPaintNotes(cursor);
  }, []);
  useEffect(() => {
    if(data !== undefined){
        setNotes(data.noteFeed);
        setHasNextPage(data.noteFeed.hasNextPage);
        setCursor(data.noteFeed.cursor);
    }
  }, [data]);
  if (loading && !noteFeed?.notes) return <Sugar color={'rgb(14 165 233)'} />;
  if (error) return `Error! ${error.message}`;
  return (<Home 
    notes={noteFeed?.notes} 
    getAndPaintNotes={getAndPaintNotes} 
    cursor={cursor}
    hasNextPage={hasNextPage}
    />);
};
export default HomeContainer;
