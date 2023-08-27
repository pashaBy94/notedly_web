import React from 'react';
import { IconContext } from 'react-icons';
import { BsArrowUpCircle } from 'react-icons/bs';
import ReactIcons from '../../hoc/ReactIcons';
import { scrollToMyRef } from '../../utils/utils';

const ScrollToTop = ({ scroll, parentScroll }) => {
  return (
    <>
      {scroll ? (
        <div
          onClick={() => scrollToMyRef(parentScroll)}
          className=" cursor-pointer fixed bottom-[50px] fm:bottom-[30px] right-[60px] fm:right-[30px] bg-transparent animate-bounce"
        >
          <ReactIcons
            element={BsArrowUpCircle}
            col="#0EA5E9"
            cl="global-class-name"
            sz="4em"
          />
        </div>
      ) : (
        ''
      )}
    </>
  );
};
export default ScrollToTop;
