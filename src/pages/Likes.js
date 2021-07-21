// LIBRARY
import React, { useEffect } from 'react';
import { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

// STYLE
import { flexBox } from '../common/style';

// ELEMENTS
import { Grid } from '../elements';

// COMPONENTS
// import Post from "../components/Post";
// import { postActions } from "../redux/modules/post";
import BlogUser from '../components/BlogUser';
import Permit from '../components/Permit';

// MODULES
// import { likeActions } from "../redux/modules/mypage";

const Likes = (props) => {
  // const dispatch = useDispatch();

  // const likeList = useSelector((state) => state.like.list);
  // const postList = useSelector((state) => state.post.list);

  // React.useEffect(() => {
  //   dispatch(likeActions.getLikeDB());

  //   return () => {
  //     dispatch(likeActions.getLikePost([], 0));
  //   };
  // }, []);

  // useEffect(() => {
  //   dispatch(postActions.getPostListDB());

  //   return () => dispatch(postActions.getPostList([], 0));
  // }, []);

  return (
    <Permit>
      <Grid
        width="100%"
        addstyle={() => {
          flexBox();
          return css`
            display: flex;
            max-width: 990px;
            padding: 0 8px;
            box-sizing: border-box;
            margin: 8% auto 0;
          `;
        }}
      >
        <Grid width="100%">
          <Grid
            width="100%"
            // bgColor="white"
            addstyle={() => {
              return css`
                max-width: 540px;
              `;
            }}
          >
            {/* {postList.map((post) => (
              <Post
                post={post}
                key={(Date.now() + Math.random()).toString(36)}
              />
            ))} */}
          </Grid>
        </Grid>

        <Grid
          width="100%"
          bgColor=""
          addstyle={() => {
            return css`
              margin: 0 -10% 38px 10%;
              height: 300px;
            `;
          }}
        >
          <BlogUser />
        </Grid>
      </Grid>
    </Permit>
  );
};

export default Likes;
