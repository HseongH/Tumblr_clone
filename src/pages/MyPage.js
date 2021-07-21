// LIBRARY
import React, { useEffect } from "react";
import { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// STYLE
import { flexBox, flexVer } from "../common/style";

// ELEMENTS
import { Image, Text, Grid } from "../elements";

// COMPONENTS
import InputBox from "../components/InputBox";
import Post from "../components/Post";
// import { postActions } from "../redux/modules/post";

const MyPage = (post) => {
  // const dispatch = useDispatch();

  // const postList = useSelector((state) => state.post.list);

  // useEffect(() => {
  //   dispatch(postActions.getPostListDB());

  //   return () => dispatch(postActions.getPostList([], 0));
  // }, []);

  return (
    <React.Fragment>
      <Grid
        width="100%"
        addstyle={() => {
          flexBox();
          return css`
            display: flex;
          `;
        }}
      >
        <Grid
          width="100%"
          addstyle={() => {
            return css`
              ${flexVer("flex-end")}
              max-width: 580px;
              flex-direction: column;
              margin-right: 10%;
            `;
          }}
        >
          <Grid
            addstyle={() => {
              return css`
                display: flex;
              `;
            }}
          >
            {/* <InputBox /> */}
          </Grid>

          <Grid
            addstyle={() => {
              return css`
                display: flex;
                flex-direction: column;
              `;
            }}
          >
            <Grid
              addstyle={() => {
                return css`
                  display: flex;
                `;
              }}
            >
              <Grid
                addstyle={() => {
                  return css`
                    width: 64px;
                    height: 64px;
                    position: absolute;
                    top: 0;
                    left: -76px;
                  `;
                }}
              >
                <Image
                  addstyle={() => {
                    return css`
                      border-radius: 3px;
                    `;
                  }}
                  src={
                    post.profileImg
                      ? post.profileImg
                      : "https://assets.tumblr.com/images/default_avatar/octahedron_open_128.png"
                  }
                  margin="0 0 20px"
                />
              </Grid>
              <InputBox />
            </Grid>

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
          addstyle={() => {
            return css`
              display: flex;
              flex-direction: column;
              padding: 4px 0;
            `;
          }}
        >
          <Text color="white" fontSize="20px">
            userID
          </Text>
          <Text color="gray" fontSize="20px" margin="0 0 5% 0">
            제목 없음
          </Text>
          <Text color="white" fontSize="20px" margin="0 0 5% 0">
            포스트
          </Text>
          <Text color="white" fontSize="20px" margin="0 0 5% 0">
            팔로워
          </Text>
          <Text color="white" fontSize="20px" margin="0 0 5% 0">
            활동
          </Text>
          <Text color="white" fontSize="20px" margin="0 0 5% 0">
            임시 저장
          </Text>
          <Text color="white" fontSize="20px" margin="0 0 5% 0">
            대기
          </Text>
          <Text color="white" fontSize="20px" margin="0 0 5% 0">
            블로그 스타일 편집
          </Text>
          <Text color="white" fontSize="20px" margin="0 0 10% 0">
            포스트 일괄 편집
          </Text>
          <Text color="white" fontSize="20px">
            레이더
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MyPage;
