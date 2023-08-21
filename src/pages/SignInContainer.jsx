import React, { useState } from 'react';
import { useEffect } from 'react';
import { gql, useApolloClient, useMutation } from '@apollo/client';
import { Sugar } from 'react-preloaders';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
import { Navigate, useNavigate } from 'react-router-dom';
import SignIn from './SignIn';
import { IS_LOG, SIGN_IN } from '../utils/query';

loadDevMessages();
loadErrorMessages();
const SignInContainer = () => {
  const client = useApolloClient();
  const navigate = useNavigate();
  let [signIn, { loading, error }] = useMutation(SIGN_IN, {
    onCompleted: (data) => {
      localStorage.setItem('tokenNotedly', data.signIn);
      client.writeQuery({
        query: IS_LOG,
        data: {
          isLog: true,
        },
      });
    navigate('/');
    },
    onError: (err) => {
      console.log(err);
    },
  });
  useEffect(() => {
    document.title = 'Sign In - Notedly';
  }, []);
    if (loading) return <Sugar color={'rgb(14 165 233)'} />;
    if (error) console.log(error.message);
  return <SignIn signIn={signIn}/>;
};
export default SignInContainer;
