// LIBRARY
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// REDUX
import { postActions } from '../redux/modules/post';

// COMPONENTS
import InputBox from '../components/InputBox';
import Post from '../components/Post';
import Permit from '../components/Permit';

const Home = (props) => {
  const dispatch = useDispatch();
  const query = window.location.search;

  const { postList, userId } = useSelector(
    (state) => ({
      postList: state.post.list,
      userId: state.user.userId,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (query) dispatch(postActions.getDetailPostDB(query));
    else dispatch(postActions.getPostListDB());

    return () => dispatch(postActions.getPostList([], 0));
  }, [userId, query]);

  return (
    <Permit>
      <InputBox />
      {postList.map((post) => (
        <Post post={post} key={(Date.now() + Math.random()).toString(36)} />
      ))}
    </Permit>
  );
};

Home.propTypes = {};

export default Home;
