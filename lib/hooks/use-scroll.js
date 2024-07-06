import { useCallback, useEffect, useState } from 'react';

export default function useScroll(threshold) {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(document.body.scrollTop > threshold);
  }, [threshold]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.addEventListener('scroll', onScroll);
      return () => {
        document.body.removeEventListener('scroll', onScroll);
      };
    } else {
      console.log('Window is undefined');
    }
  }, [onScroll]);

  return scrolled;
}
