import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';

const InfinityScroll = ({ list, children, root }) => {
  const dispatch = useDispatch();

  const [target, setTarget] = useState(null);

  useEffect(() => {
    const options = { threshold: 0.5, root: root };

    const infiniteScroll = ([entries], observer) => {
      if (entries.isIntersecting) {
        new Promise((resolve) => {
          // if (page === 'Home') resolve(dispatch(postActions.getMorePostListDB()));
          // if (page === 'Search') resolve(dispatch(searchActions.searchMorePostDB(keyword)));
          // if (page === 'Like') resolve(dispatch(likeActions.getMoreLikeListDB()));
        }).then((res) => {
          observer.unobserve(entries.target);
        });
      }
    };

    const io = new IntersectionObserver(infiniteScroll, options);
    if (target) io.observe(target);

    return () => io && io.disconnect();
  }, [target]);

  return (
    <>
      {list.map((elem, idx) => {
        const isLast = idx === list.length - 1;

        // if (elem.postId === parseInt(postId)) return null;

        return <Fragment key={(Date.now() + Math.random()).toString(36)}>{children}</Fragment>;
      })}
    </>
  );
};

export default InfinityScroll;
