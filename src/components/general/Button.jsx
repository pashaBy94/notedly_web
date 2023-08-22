import React from 'react';

const Button = ({children, onClick}) => {
  return (
    <button onClick={onClick} className='block p3 px-3 border-none rounded-md text-lg text-white bg-sky-500 cursor-pointer hover:opacity-80 active:bg-sky-800'>{children}</button>
  );
};
export default Button;
