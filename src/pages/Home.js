// LIBRARY
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// COMPONENTS
import InputBox from '../components/InputBox';
import Post from '../components/Post';
import { postActions } from '../redux/modules/post';

const Home = (props) => {
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.post.list);

  useEffect(() => {
    dispatch(postActions.getPostListDB());

    return () => dispatch(postActions.getPostList([], 0));
  }, []);

  return (
    <>
      <InputBox />
      {postList.map((post) => (
        <Post post={post} key={(Date.now() + Math.random()).toString(36)} />
      ))}
    </>
  );
};

Home.propTypes = {};

export default Home;
