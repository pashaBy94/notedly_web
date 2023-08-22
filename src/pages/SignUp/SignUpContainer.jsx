import React, { useState, useEffect } from 'react';
import SignUp from './SignUp';
import { useMutation, useApolloClient, useLazyQuery } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
import { Navigate } from 'react-router-dom';
import { GET_MY, IS_LOG } from '../../utils/query';
import Preloader from '../../components/general/Preloader';
import { SIGN_UP } from '../../utils/mutation';

loadDevMessages();
loadErrorMessages();
const SignUpContainer = () => {
  const client = useApolloClient();
  let [isOk, setOk] = useState(false);
  const [getMy, { data: myData, loading: myLoading, error: myError} ]= useLazyQuery(GET_MY);
  let [signUp, { loading, error }] = useMutation(SIGN_UP, {
    onCompleted: (data) => {
      localStorage.setItem('tokenNotedly', data.signUp);
      client.writeQuery({
        query: IS_LOG,
        data: {
          isLog: true,
        },
      });
      getMy();
    },
    onError: (err) => {
      console.log(err);
    },
  });
  useEffect((()=>{
    if(myData){
      client.writeQuery({
        query: GET_MY,
        data: {...myData},
      });
      localStorage.setItem('me_id', myData?.me?.id);
      setOk(true);
    }
  }),[myData]);
  useEffect(() => {
    document.title = 'Sign Up - Notedly';
  }, []);
  if (isOk) return <Navigate replace to={'/'} />;
  if (loading) return <Preloader />;
  if (error) return `Error! ${error.message}`;
  return <SignUp signUp={signUp} />;
};
export default SignUpContainer;
