import React from 'react';
import { IconContext } from 'react-icons';

const ReactIcons = ({ element: Element, col='#333', cl='', sz='2em' }) => {
  return (
    <>
      <IconContext.Provider
        value={{
          color: col,
          className: cl,
          size: sz,
        }}
      >
        <Element />
      </IconContext.Provider>
    </>
  );
};
export default ReactIcons;
