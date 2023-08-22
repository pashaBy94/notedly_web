import React, { useEffect } from 'react';
import { useApolloClient, useLazyQuery, useMutation } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
import { useNavigate } from 'react-router-dom';
import SignIn from './SignIn';
import { GET_MY, IS_LOG } from '../../utils/query';
import Preloader from '../../components/general/Preloader';
import { SIGN_IN } from '../../utils/mutation';

loadDevMessages();
loadErrorMessages();
const SignInContainer = () => {
  const client = useApolloClient();
  const navigate = useNavigate();
  const [getMy, { data: myData, loading: myLoading, error: myError} ]= useLazyQuery(GET_MY);
  let [signIn, { loading, error }] = useMutation(SIGN_IN, {
    refetchQueries: [{query: IS_LOG}],
    onCompleted: (data) => {
      localStorage.setItem('tokenNotedly', data.signIn)
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
      navigate('/');
    }
  }),[myData]);
  useEffect(() => {
    document.title = 'Sign In - Notedly';
  }, []);
    if (loading) return <Preloader />;
    if (error) console.log(error.message);
  return <SignIn signIn={signIn}/>;
};
export default SignInContainer;
