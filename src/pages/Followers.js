// LIBRARY
import React, { useEffect } from "react";
import { css } from "styled-components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

// STYLE
import { flexBox } from "../common/style";

// ELEMENTS
import { Grid, Text, Input } from "../elements";

// COMPONENTS
import Permit from "../components/Permit";
import MyFollower from "../components/MyFollower";

// ICON

// REDUX
import { myPageActions } from "../redux/modules/mypage";

const Followers = (props) => {
  const dispatch = useDispatch();

  const { followerList } = useSelector(
    (state) => ({
      followerList: state.mypage.list,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(myPageActions.getMyFollowerDB());
  }, []);

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
        <Grid width="100%" addstyle={() => {
              return css`
                display: flex;
                justify-content: space-between;
                align-items: center;
              `;
            }}>
          <Grid width="100%" margin="0 10% 0 0" >
            <Grid
              margin="-16% 0 0 0"
              width="100%"
              addstyle={() => {
                return css`
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                `;
              }}
            >
              <Text fontSize="18px" color="white">
                팔로우 1명
              </Text>
              <Input
                width="40%"
                placeholder="내 팔로워 검색"
                bgColor="rgba(255, 255, 255, 0.25)"
                padding="6px"
              />
            </Grid>
            <Grid width="100%" margin="0 10% 0 0">
              {followerList.map((follower) => {
                return (
                  <MyFollower
                    post={follower}
                    key={(Date.now() + Math.random()).toString(36)}
                  ></MyFollower>
                );
              })}
            </Grid>
          </Grid>

          <Grid
            width="100%"
            margin="4% 0 0 0"
            addstyle={() => {
              return css`
                display: flex;
                flex-direction: column;
                padding: 4px 0;
              `;
            }}
          >
            <Text color="white" fontSize="20px">
              userId
            </Text>
            <Text color="gray" fontSize="20px" margin="0 0 5% 0">
              제목없음
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
      </Grid>
    </Permit>
  );
};

export default Followers;
