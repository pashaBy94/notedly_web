import { useApolloClient, useQuery } from '@apollo/client';
import React, { memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './../img/logo.svg';
import { IS_LOG } from '../utils/query';

const Header = memo(() => {
  const navigate = useNavigate();
  const { data } = useQuery(IS_LOG);
  const client = useApolloClient();
  async function logout() {
    localStorage.removeItem('tokenNotedly');
    localStorage.removeItem('me_id');
    await client.resetStore();
    client.writeQuery({
      query: IS_LOG,
      data: {
        isLog: false,
      },
    });
    navigate('/');
  }
  return (
    <header className=" w-full px-[1em] py-[0.5em] flex h-16 fixed items-center justify-between bg-white shadow-[0_0_5px_0_rgba(0,0,0,0.25)] z-[1]">
      <div className=' flex items-center '>
        <Link to={'/'}>
      <img src={logo} alt="" className=" h-10 m-3" />
        </Link>
      <h1 className=" m-0 p-0 inline text-[24px]">Notedly</h1>
      </div>
      <div>
        {data.isLog ? (
          <button
            onClick={() => logout()}
            className=" bg-transparent text-sky-600 border-none p-0 underline cursor-pointer hover:text-sky-800 active:text-sky-800"
          >
            Log Out
          </button>
        ) : (
          <div className='flex items-center'>
            <Link className='m-3' to={'/signup'}>Sign Up</Link>
            <Link to={'/signin'}>Sign In</Link>
          </div>
        )}
      </div>
    </header>
  );
});
export default Header;
