import { useEffect } from "react";

export function useScroll(setScroll, ref) {
    useEffect(() => {
        let scheduledAnimationFrame;
        function readAndUpdatePage(e) {
            const lastScrollY = e.target.children[0];
            let y = lastScrollY.getBoundingClientRect().top;
            if (y < 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
            scheduledAnimationFrame = false;
        }
        function onScroll(e) {
            if (scheduledAnimationFrame) {
                return;
            }
            scheduledAnimationFrame = true;
            window.requestAnimationFrame(() => readAndUpdatePage(e));
        }
        ref.current.addEventListener('scroll', onScroll);
        return () => {
            ref.current.removeEventListener('scroll', onScroll);
        };
    }, [])
}