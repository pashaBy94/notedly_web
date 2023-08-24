import React from 'react';
import { IconContext } from 'react-icons';
import { BsArrowUpCircle } from 'react-icons/bs';
import { scrollToMyRef } from '../../utils/utils';

const ScrollToTop = ({ scroll, parentScroll }) => {
  return (
    <>
      {scroll ? (
        <div
          onClick={() => scrollToMyRef(parentScroll)}
          className=" cursor-pointer fixed bottom-[50px] fm:bottom-[30px] right-[60px] fm:right-[30px] bg-transparent animate-bounce"
        >
          <IconContext.Provider
            value={{
              color: '#0EA5E9',
              className: 'global-class-name',
              size: '4em',
            }}
          >
            <BsArrowUpCircle />
          </IconContext.Provider>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
export default ScrollToTop;
