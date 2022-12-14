import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const useObserver = (hashName, customOptions = null) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const callbackFunction = (entries) => {
    const [entry] = entries;
    const isIntersecting = entry.isIntersecting;

    setIsVisible(isIntersecting);

    if (hashName && isIntersecting) {
      router.replace(router.pathname, router.pathname + `#${hashName}`);
    } else if (isIntersecting && !hashName) {
      router.replace(router.pathname, router.pathname.split("#")[0]);
    }
  };

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
    };

    options = customOptions ? customOptions : options;

    const observer = new IntersectionObserver(callbackFunction, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, customOptions]);

  return [containerRef, isVisible];
};

export default useObserver;
