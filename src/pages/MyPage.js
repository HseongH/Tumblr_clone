// LIBRARY
import React, { useEffect } from "react";
import { css } from "styled-components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

// STYLE
import { flexBox, flexVer } from "../common/style";

// ELEMENTS
import { Image, Grid } from "../elements";

// COMPONENTS
import InputBox from "../components/InputBox";
import Post from "../components/Post";
import Permit from "../components/Permit";
import BlogUser from "../components/BlogUser";

// REDUX
import { myPageActions } from "../redux/modules/mypage";

const MyPage = (post) => {
  const dispatch = useDispatch();

  const { myPostList, userId, nickname, profileImg } = useSelector(
    (state) => ({
      myPostList: state.mypage.list,
      userId: state.user.userId,
      nickname: state.user.nickname,
      profileImg: state.user.profileImg,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(myPageActions.getMyPostDB());
  }, []);

  if (myPostList.length && !myPostList[0].img) return null;

  return (
    <Permit>
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
                      margin: 0 0 0 60%;
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

            {myPostList.map((post) => {
              const postInfo = { ...post, userId, nickname, profileImg };

              return (
                <Post
                  post={postInfo}
                  key={(Date.now() + Math.random()).toString(36)}
                />
              );
            })}
          </Grid>
        </Grid>

        <BlogUser />
      </Grid>
    </Permit>
  );
};

export default MyPage;
