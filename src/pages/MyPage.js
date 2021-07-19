// LIBRARY
import React from 'react';
import { css } from 'styled-components';

// STYLE
import { flexBox } from '../common/style';

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
              max-width: 625px;
              display: flex;
              flex-direction: column;
              align-items: flex-end;
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
              <Image
                src="https://assets.tumblr.com/images/default_avatar/octahedron_open_128.png"
                addstyle={() => {
                  return css``;
                }}
              />
            </Logo>

            <InputBox />
          </Grid>
        </Grid>

        <Grid> 우측 레이아웃 </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MyPage;
