// LIBRARY
import React from "react";
import { css } from "styled-components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

// STYLE
import { flexBox } from "../common/style";

// ELEMENTS
import { Grid, Text, Input, Image } from "../elements";

// COMPONENTS
import Permit from "../components/Permit";
import Post from "../components/Post";
import MyFollower from "../components/MyFollower";

// ICON
import MoreVertIcon from "@material-ui/icons/MoreVert";

// REDUX
import { myPageActions } from "../redux/modules/mypage";

const Followers = (props) => {
  const dispatch = useDispatch();

  const { followerList, userId, nickname, profileImg } = useSelector(
    (state) => ({
      followerList: state.mypage.list,
      userId: state.user.userId,
      nickname: state.user.nickname,
      profileImg: state.user.profileImg,
    }),
    shallowEqual
  );

  return (
    <Permit>
      <Grid
        width="100%"
        margin="5% 0 0 0"
        addstyle={() => {
          flexBox();
          return css`
            display: flex;
          `;
        }}
      >
        <MyFollower></MyFollower>

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
    </Permit>
  );
};

export default Followers;
