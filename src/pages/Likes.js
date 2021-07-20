// LIBRARY
import React, { useEffect } from "react";
import { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// STYLE
import { flexBox } from "../common/style";

// ELEMENTS
import { Grid, Text } from "../elements";

// COMPONENTS
import Post from "../components/Post";
import { postActions } from "../redux/modules/post";
import BlogUser from "../components/BlogUser";

// MODULES
import { likeActions } from "../redux/modules/like";

const Likes = (props) => {
  const dispatch = useDispatch();

  const likeList = useSelector((state) => state.like.list);
  const postList = useSelector((state) => state.post.list);

  React.useEffect(() => {
    dispatch(likeActions.getLikeDB());

    return () => {
      dispatch(likeActions.getLikePost([], 0));
    };
  }, []);

  useEffect(() => {
    dispatch(postActions.getPostListDB());

    return () => dispatch(postActions.getPostList([], 0));
  }, []);

  return (
    <React.Fragment>
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
            {postList.map((post) => (
              <Post
                post={post}
                key={(Date.now() + Math.random()).toString(36)}
              />
            ))}
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
          <Text
            color="white"
            fontSize="24px"
            fontWeight="bold"
            addstyle={() => {
              return css``;
            }}
          >
            요런 블로그 어때요!
          </Text>

          <hr style={{ marginRight: "20%" }} />

          <BlogUser />
          <BlogUser />
          <BlogUser />
          <BlogUser />
          <BlogUser />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Likes;
