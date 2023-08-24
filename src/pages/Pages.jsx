import React, { useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import PrivateRoute from '../hoc/PrivateRoute';
import SignUpContainer from './SignUp/SignUpContainer';
import HomeContainer from './Home/HomeContainer';
import NotePageContainer from './NotePage/NotePageContainer';
import SignInContainer from './SignIn/SignInContainer';
import NewNoteContainer from './MyNote/NewNote/NewNoteContainer';
import MyNotesContainer from './MyNote/MyNotesContainer';
import FavoritesContainer from './Favorites/FavoritesContainer';
import { useState } from 'react';

const Pages = () => {
  const [scroll, setScroll] = useState(false);
  const ref = useRef('');
  return (
      <BrowserRouter>
    <Layout setScroll={setScroll} ref={ref}>
      <Routes>
        <Route path="/" element={<HomeContainer scroll={scroll} parentScroll={ref?.current}/>} />
        <Route path="/mynotes" element={<PrivateRoute element={<MyNotesContainer  scroll={scroll} parentScroll={ref?.current}/>} />}/>
        <Route path="/favorites" element={<PrivateRoute element={<FavoritesContainer  scroll={scroll} parentScroll={ref?.current}/>} />} />
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
