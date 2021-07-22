// LIBRARY
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from 'styled-components';

// REDUX
import { alarmActions } from '../redux/modules/alarm';

// ELEMENTS
import { Grid, Image, Title } from '../elements';

// COMPONENTS
import Follow from './Follow';

// STYLE
import { flexBox, flexVer } from '../common/style';

const BlogUser = (props) => {
  const dispatch = useDispatch();

  const recommendList = useSelector((state) => state.alarm.recommend);

  useEffect(() => {
    dispatch(alarmActions.getRecommendDB());

    return () => dispatch(alarmActions.getRecommend([]));
  }, []);

  if (!recommendList.length) return null;

  return (
    <Grid width="320px" color="white">
      <Title
        fontSize="20px"
        addstyle={() => {
          return css`
            border-bottom: solid rgba(${(props) => props.theme.palette.gray}, 0.5);
            padding: 15px 10px;
          `;
        }}
      >
        요런 블로그 어때요!
      </Title>

      <Grid
        width="100%"
        padding="15px 20px"
        addstyle={() => {
          return css`
            & > div {
              margin-bottom: 15px;

              &:last-child {
                margin-bottom: 0;
              }
            }
          `;
        }}
      >
        {recommendList.map((recommend, idx) => {
          return (
            <Grid
              key={(idx + Date.now() + Math.random()).toString(36)}
              width="100%"
              addstyle={() => {
                return css`
                  ${flexBox('space-between')}
                `;
              }}
            >
              <Grid
                width="auto"
                addstyle={() => {
                  return css`
                    ${flexVer()};
                  `;
                }}
              >
                <Grid width="32px" height="32px" margin="0 12px 0 0" overflow="hidden">
                  <Image
                    src={
                      recommend.profileImg
                        ? recommend.profileImg
                        : 'https://assets.tumblr.com/images/default_avatar/octahedron_open_128.png'
                    }
                    alt="profile image"
                  />
                </Grid>
                {recommend.nickname}
              </Grid>

              <Follow
                userId={recommend.userId}
                isFollow={!recommend.follow}
                callNext={() => {
                  dispatch(alarmActions.addFollow(recommend.userId));
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default BlogUser;
