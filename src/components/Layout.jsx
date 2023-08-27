import React, { forwardRef } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useScroll } from '../castomHooks/onScroll';
import Header from './Header';
import Navigation from './Navigation';

const Layout = forwardRef(({ children, setScroll }, ref) => {
  useScroll(setScroll, ref);
  return (
    <>
      <Header />
      <section className=" sw:flex sw:top-16 sw:relative sw:h-[calc(100%-4rem)] sw:w-full sw:flex-auto sw:flex-col">
        <Navigation />
        <main
          ref={ref}
          className=" fixed h-[calc(100%-185px)] w-full p-1em overflow-y-scroll sw:flex-1 sw:ml-[220px] sw:h-[calc(100%-64px)] sw:w-[calc(100%-220px)] scrollToBe"
        >
          {children}
        </main>
      </section>
    </>
  );
});
export default Layout;
