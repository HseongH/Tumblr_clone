// LIBRARY
import React from 'react';
import { css } from 'styled-components';

// STYLE
import { flexBox } from '../common/style';

// ELEMENTS
import { Grid, Text, Input, Image } from '../elements';

// COMPONENTS
import Permit from '../components/Permit';

// ICON
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Followers = (props) => {
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
        <Grid width="100%" margin="0 10% 0 0">
          <Grid
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
              팔로워 1명
            </Text>
            <Input
              width="40%"
              placeholder="내 팔로워 검색"
              bgColor="rgba(255, 255, 255, 0.25)"
              padding="6px"
            />
          </Grid>

          <Grid width="100%" margin="3% 0 0 0">
            <Grid margin="2% 0 0 0">
              <Grid
                padding="12px"
                bgColor="white"
                addstyle={() => {
                  return css`
                    display: flex;
                    align-items: center;
                  `;
                }}
              >
                <Image
                  addstyle={() => {
                    return css`
                      width: 36px;
                    `;
                  }}
                  height="36px"
                  src="https://assets.tumblr.com/images/default_avatar/octahedron_open_128.png"
                />

                <Grid
                  magin="0 0 3% 0"
                  addstyle={() => {
                    return css`
                      display: flex;
                      flex-direction: column;
                      padding: 4px;
                    `;
                  }}
                >
                  <Text
                    fontSize="13px"
                    fontWeight="bold"
                    addstyle={() => {
                      return css`
                        padding: 2px;
                      `;
                    }}
                  >
                    hangulteam
                  </Text>

                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    addstyle={() => {
                      return css`
                        padding: 2px;
                      `;
                    }}
                  >
                    hangulteam
                  </Text>
                </Grid>

                <Text
                  margin="0 -35% 0 30%"
                  fontSize="14px"
                  color="blue"
                  addstyle={() => {
                    return css`
                      padding: 2px;
                      width: 100%;
                    `;
                  }}
                >
                  팔로우
                </Text>

                <MoreVertIcon />
              </Grid>
            </Grid>
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
    </Permit>
  );
};

export default Followers;
