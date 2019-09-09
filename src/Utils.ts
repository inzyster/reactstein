import { useRef, useEffect } from 'react';

export const getUrl = (url: string) => (process.env.NODE_ENV === 'development' ? url : `/reactstein/${url}`);

/// source: https://css-tricks.com/using-requestanimationframe-with-react-hooks/
export const useAnimationFrame = (callback: (delta: number) => void) => {
  const requestRef = useRef<number>(0);
  const previousTimeRef = useRef<number | undefined>();

  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      const delta = time - previousTimeRef.current;
      callback(delta);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
};
