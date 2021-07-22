// LIBRARY
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// REDUX
import { postActions } from '../redux/modules/post';

// FUNCTION
import InfinityScroll from '../common/infinityScroll';

// ELEMENTS
import { Grid } from '../elements/index';

// COMPONENTS
import InputBox from '../components/InputBox';
import Post from '../components/Post';
import Permit from '../components/Permit';
import BlogUser from '../components/BlogUser';

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

  const getMorePost = () => {
    dispatch(postActions.getPostListDB());
  };

  useEffect(() => {
    if (query) dispatch(postActions.getDetailPostDB(query));
    else dispatch(postActions.getPostListDB());

    return () => dispatch(postActions.getPostList([], 0));
  }, [userId, query]);

  return (
    <Permit>
      <Grid>
        <InputBox />

        {postList.map((post, idx) => (
          <InfinityScroll
            next={getMorePost}
            index={idx}
            length={postList.length}
            key={(post.postId + Date.now() + Math.random()).toString(36)}
          >
            <Post post={post} />
          </InfinityScroll>
        ))}
      </Grid>

      <BlogUser />
    </Permit>
  );
};

Home.propTypes = {};

export default Home;
