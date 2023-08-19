import React, { useState } from 'react';
import { useEffect } from 'react';
import SignUp from './SignUp';
import { gql, useMutation, useApolloClient } from '@apollo/client';
import { Sugar } from 'react-preloaders';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
import { Navigate } from 'react-router-dom';
import { IS_LOG, SIGN_UP } from '../utils/query';

loadDevMessages();
loadErrorMessages();
const SignUpContainer = () => {
  const client = useApolloClient();
  let [isOk, setOk] = useState(false);

  let [signUp, { loading, error }] = useMutation(SIGN_UP, {
    onCompleted: (data) => {
      localStorage.setItem('tokenNotedly', data.signUp);
      client.writeQuery({
        query: IS_LOG,
        data: {
          isLog: true,
        },
      });
      setOk(true);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  useEffect(() => {
    document.title = 'Sign Up - Notedly';
  }, []);
  if (isOk) return <Navigate replace to={'/'} />;
  if (loading) return <Sugar color={'rgb(14 165 233)'} />;
  if (error) return `Error! ${error.message}`;
  return <SignUp signUp={signUp} />;
};
export default SignUpContainer;
