import { useState, useEffect } from 'react'

// via https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/
const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
      const handleWindowResize = () => {
          setWidth(window.innerWidth);
          setHeight(window.innerHeight);
      }

      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    // Return the width so we can use it in our components
    return { width };
  }

export default useViewport