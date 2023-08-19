import React from 'react';
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

const Pages = () => {
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
