import React, { forwardRef } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useScroll } from '../castomHooks/onScroll';
import Header from './Header';
import Navigation from './Navigation';

const Layout = forwardRef(({ children, setScroll }, ref) => {
  // useEffect(() => {
  //   let scheduledAnimationFrame;
  //   function readAndUpdatePage(e) {
  //     const lastScrollY = e.target.children[0];
  //     let y = lastScrollY.getBoundingClientRect().top;
  //     if (y < 0) {
  //       setScroll(true);
  //     } else {
  //       setScroll(false);
  //     }
  //     scheduledAnimationFrame = false;
  //   }
  //   function onScroll(e) {
  //     if (scheduledAnimationFrame) {
  //       return;
  //     }
  //     scheduledAnimationFrame = true;
  //     window.requestAnimationFrame(() => readAndUpdatePage(e));
  //   }
  //   ref.current.addEventListener('scroll', onScroll);
  //   return () => {
  //     ref.current.removeEventListener('scroll', onScroll);
  //   };
  // }, []);
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
