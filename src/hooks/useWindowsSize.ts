import { useEffect, useState } from 'react'
import { IPlayerParams } from '../@types/types'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState <IPlayerParams> ({
    width: 950,
    height: 950,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
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
