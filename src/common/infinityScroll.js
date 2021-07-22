import React, { useEffect, useState } from 'react';

const InfinityScroll = ({ length, children, root, next, index }) => {
  const [target, setTarget] = useState(null);
  const isLast = index === length - 1;

  useEffect(() => {
    const options = { threshold: 0.5, root: root };

    const infiniteScroll = async ([entries], observer) => {
      if (entries.isIntersecting) {
        await next();
        observer.unobserve(entries.target);
      }
    };

    const io = new IntersectionObserver(infiniteScroll, options);
    if (target) io.observe(target);

    return () => io && io.disconnect();
  }, [target]);

  return <div ref={isLast ? setTarget : null}>{children}</div>;
};

export default InfinityScroll;
