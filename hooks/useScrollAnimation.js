// 'use client';

// import { useEffect, useRef, useState } from 'react';

// export default function useScrollAnimation(threshold = 0.1) {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [threshold]);

//   return [ref, isVisible];
// }

'use client';

import { useEffect, useRef, useState } from 'react';

export default function useScrollAnimation(threshold = 0.1) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let observedElement = ref.current;
    if (!observedElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(observedElement);

    return () => {
      if (observedElement) {
        observer.unobserve(observedElement);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
}