// LIBRARY
import React, { useEffect } from 'react';
import { css } from 'styled-components';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// STYLE
import { flexBox } from '../common/style';

// ELEMENTS
import { Grid } from '../elements';

// COMPONENTS
import Post from '../components/Post';
import BlogUser from '../components/BlogUser';
import Permit from '../components/Permit';

// REDUX
import { myPageActions } from '../redux/modules/mypage';

const Likes = (props) => {
  const dispatch = useDispatch();

  const { likeList } = useSelector(
    (state) => ({
      likeList: state.mypage.list,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(myPageActions.getMyLikeDB());
  }, []);

  if (likeList.length && !likeList[0].img) return null;

  return (
    <Permit>
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
            addstyle={() => {
              return css`
                max-width: 540px;
              `;
            }}
          >
            {likeList.map((like) => {
              return <Post post={like} key={(Date.now() + Math.random()).toString(36)} />;
            })}
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
          <BlogUser />
        </Grid>
      </Grid>
    </Permit>
  );
};

export default Likes;
