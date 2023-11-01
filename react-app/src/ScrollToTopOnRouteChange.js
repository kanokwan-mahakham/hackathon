import { useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';

function ScrollToTopOnRouteChange() {
  const navigate = useNavigate();

  useEffect(() => {
    const unlisten = navigate((location) => {
      if (location.action === 'PUSH') {
        window.scrollTo(0, 0);
      }
    });

    return unlisten;
  }, [Link,navigate]);

  return null;
}

export default ScrollToTopOnRouteChange;
