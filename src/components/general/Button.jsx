import React from 'react';

const Button = ({children, onClick}) => {
  return (
    <button onClick={onClick} className=' mx-auto block p-4 px-8 border-none rounded-full text-lg text-white bg-sky-500 cursor-pointer hover:opacity-80 active:bg-sky-800'>{children}</button>
  );
};
export default Button;
