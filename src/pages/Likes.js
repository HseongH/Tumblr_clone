// LIBRARY
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// ELEMENTS
import { Grid } from '../elements';

// COMPONENTS
import Post from '../components/Post';
import BlogUser from '../components/BlogUser';
import Permit from '../components/Permit';

// REDUX
import { myPageActions } from '../redux/modules/mypage';

const Likes = (props) => {
  const dispatch = useDispatch();

  const { likeList } = useSelector(
    (state) => ({
      likeList: state.mypage.list,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(myPageActions.getMyLikeDB());
  }, []);

  if (likeList.length && !likeList[0].img) return null;

  return (
    <Permit>
      <Grid>
        {likeList.map((like) => {
          return <Post post={like} key={(Date.now() + Math.random()).toString(36)} />;
        })}
      </Grid>

      <BlogUser />
    </Permit>
  );
};

export default Likes;
