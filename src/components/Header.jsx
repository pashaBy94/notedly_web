import { useLazyQuery, useQuery } from '@apollo/client';
import React, { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './../img/logo.svg'
import './../styles/output.css'
import {useNavigate} from "react-router-dom";
import { GET_MY, IS_LOG } from '../utils/query';

const Header = memo(() => {
  const navigate = useNavigate();
  const {data, client} = useQuery(IS_LOG);
  let myId;
  const [getMy, { data: myData, loading: myLoading, error: myError}] = useLazyQuery(GET_MY);
  // if(!myLoading){
  //   myId = myData.me.id;
  // }
  useEffect((()=>{
    getMy();
  }),[]);
  useEffect(()=>{
    return ()=>{
        localStorage.removeItem('my_id');
    }
})
  useEffect((()=>{
    if(myData)
    localStorage.setItem('me_id', myData.me.id);
  }),[myData])
  async function logout(){
    localStorage.removeItem('tokenNotedly');
    client.cache.reset();
     client.writeQuery({
      query: IS_LOG,
      data: {
        isLog: false,
      }
    });
    navigate('/');
  }
  return (
    <header className=' w-full px-[1em] py-[0.5em] flex h-16 fixed items-center bg-white shadow-[0_0_5px_0_rgba(0,0,0,0.25)] z-[1]'>
      <img src={logo} alt='' height={'20px'} className=' h-10'/>
      <h1 className=' m-0 p-0 inline'>Notedly</h1>
      <div>
    {data.isLog?<button onClick={()=>logout()} className=' bg-transparent text-sky-600 border-none p-0 underline cursor-pointer hover:text-sky-800 active:text-sky-800'>Log Out</button>:<div>
      <Link to={'/signup'}>Sign Up</Link>
      <Link to={'/signin'}>Sign In</Link>
      </div>}
      </div>
    </header>
  );
});
export default Header;
