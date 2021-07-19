// LIBRARY
import React from 'react';
import { css } from 'styled-components';

// STYLE
import { flexBox, flexVer } from '../common/style';

// ELEMENTS
import { Image, Input, Text, Grid, Button } from '../elements';

// COMPONENTS
import InputBox from '../components/InputBox';
import Logo from '../components/Logo';
import Post from '../components/Post';

const MyPage = (props) => {
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
              ${flexVer('flex-end')}
              max-width: 580px;
              flex-direction: column;
              margin-right: 5%;
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
            <Logo width="64px" height="64px">
              <Image src="https://assets.tumblr.com/images/default_avatar/octahedron_open_128.png" />
            </Logo>

            <InputBox />
          </Grid>

          <Grid
            addstyle={() => {
              return css`
                display: flex;
              `;
            }}
          >
            <Logo width="64px" height="64px">
              <Image src="https://assets.tumblr.com/images/default_avatar/octahedron_open_128.png" />
            </Logo>

            <Text color="white" fontSize="40px" margin="0 auto">
              포스트 넣을 자리
            </Text>
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
