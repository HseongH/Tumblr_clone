// LIBRARY
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { css } from 'styled-components';

// REDUX
import { followActions } from '../redux/modules/follow';

// STYLE
import { flexBox, flexVer } from '../common/style';

// ELEMENTS
import { Grid, Text, Image, Button } from '../elements';

const MyFollowing = ({ post }) => {
  const dispatch = useDispatch();

  const [active, setActive] = useState(true);

  const removeFollow = () => {
    dispatch(followActions.removeFollowDB(post.userId));
    setActive(false);
  };

  return (
    <Grid
      padding="15px"
      bgColor="white"
      addstyle={() => {
        return css`
          ${flexBox('space-between')};
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
        <Grid
          width="36px"
          height="36px"
          overflow="hidden"
          margin="0 12px 0 0"
          addstyle={() => {
            return css`
              background-image: ${post.profileImg
                ? post.profileImg
                : 'https://assets.tumblr.com/images/default_avatar/octahedron_open_128.png'};
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
            `;
          }}
        ></Grid>

        <Text fontWeight="bold">{post.nickname}</Text>
      </Grid>

      {active ? (
        <Button color="accent" fontSize="14px" clickEvent={removeFollow}>
          언팔로우
        </Button>
      ) : null}
    </Grid>
  );
};

export default MyFollowing;
