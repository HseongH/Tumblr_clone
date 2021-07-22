// LIBRARY
import React, { useEffect } from "react";
import { css } from "styled-components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

// STYLE
import { flexBox } from "../common/style";

// ELEMENTS
import { Grid, Text, Input, Button } from "../elements";

// COMPONENTS
import BlogUser from "../components/BlogUser";
import Permit from "../components/Permit";
import MyFollowing from "../components/MyFollowing";

// ICON

// REDUX
import { myPageActions } from "../redux/modules/mypage";

const Following = (props) => {
  const dispatch = useDispatch();

  const { followingList } = useSelector(
    (state) => ({
      followingList: state.mypage.list,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(myPageActions.getMyFollowingDB());
  }, []);

  return (
    <Permit>
      <Grid
        margin="6% 0 0 18%"
        addstyle={() => {
          flexBox();
          return css`
            display: flex;
            max-width: 990px;
            padding: 0 8px;
            box-sizing: border-box;
            /* margin: 8% auto 0 auto; */
          `;
        }}
      >
        <Grid
          width="100%"
          margin="0 0 0 -35%"
          addstyle={() => {
            return css`
              display: flex;
              flex-direction: column;
            `;
          }}
        >
          <Text fontSize="18px" color="white">
            팔로잉 2명
          </Text>

          <Grid
            addstyle={() => {
              return css`
                display: flex;
              `;
            }}
          >
            <Input
              margin="1% 2% 1% 0"
              width="100%"
              bgColor="rgba(255, 255, 255, 0.25)"
              placeholder="팔로우하려면 사용자 이름, URL 또는 이메일 주소를 입력하세요."
            />

            <Button
              fontWeight="bold"
              padding="14px 8px"
              margin="1% 0"
              addstyle={() => {
                return css`
                  border: 2px solid rgba(255, 255, 255, 0.4);
                  background-color: none;
                  color: rgba(255, 255, 255, 0.65);
                `;
              }}
            >
              팔로우
            </Button>
          </Grid>

          {/* 구분선 -------------------------------- */}

          {followingList.map((following) => {
            return (
              <MyFollowing
                post={following}
                key={(Date.now() + Math.random()).toString(36)}
              />
            );
          })}
        </Grid>

        {/* 구분선 -------------------------------- */}

        <Grid
          width="100%"
          bgColor=""
          addstyle={() => {
            return css`
              margin: 0 -50% 38px 10%;
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

export default Following;
