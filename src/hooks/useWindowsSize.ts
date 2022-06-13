import { useEffect, useState } from 'react'
import { IPlayerParams } from '../@types/types'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    height: '360px',
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          height: `${window.innerHeight}`,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}

export default useWindowSize;
