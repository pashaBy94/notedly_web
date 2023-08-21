import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import PrivateRoute from '../hoc/PrivateRoute';
import SignUpContainer from '../components/SignUpContainer';
import HomeContainer from './HomeContainer';
import NotePageContainer from './NotePageContainer';
import SignInContainer from './SignInContainer';
import NewNoteContainer from './NewNoteContainer';
import MyNotesContainer from './MyNotesContainer';
import FavoritesContainer from './FavoritesContainer';
import { useQuery } from '@apollo/client';
import { GET_MY, GET_MY_FAVORITES_NOTE } from '../utils/query';

const Pages = () => {
  const  { data: myData, loading: myLoading, error: myError, client} = useQuery(GET_MY_FAVORITES_NOTE);
  useEffect((()=>{
    if(myData){
      client.writeQuery({
        query: GET_MY_FAVORITES_NOTE,
        data: {...myData},
      });
      console.log(myData);
      localStorage.setItem('me_id', myData.me.id);
    }
  }),[myData])

  return (
      <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/mynotes" element={<PrivateRoute element={MyNotesContainer} />}/>
        <Route path="/favorites" element={<PrivateRoute element={FavoritesContainer} />} />
        <Route path='/signup' element={<SignUpContainer />} />
        <Route path='/signin' element={<SignInContainer />} />
        <Route path='/newnote' element={<NewNoteContainer />} />
        <Route path='/note/:id' element={<NotePageContainer />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  );
};
export default Pages;
