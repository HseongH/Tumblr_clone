// LIBRARY
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';

// REDUX
import { imgActions } from '../redux/modules/image';
import { userActions } from '../redux/modules/user';

// ELEMENTS
import { Grid, Image, Button, Input } from '../elements/index';

// COMPONENTS
import Dropdown from './Dropdown';
import PostHeader from './PostHeader';

// STYLE
import { borderBox, flexBox } from '../common/style';

// ICON
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const LabelStyle = styled.label`
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
`;

const Profile = ({ nickname, profile }) => {
  const dispatch = useDispatch();

  const [preview] = useSelector((state) => state.image.preview);

  const updateProfile = () => {
    dispatch(userActions.setProfileDB());
    dispatch(imgActions.setInitialState());
  };

  const selectFile = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    if (file) {
      reader.readAsDataURL(file);

      reader.onload = () => {
        dispatch(imgActions.setInitialState());
        dispatch(imgActions.setPreview([reader.result]));
        dispatch(imgActions.setFile([file]));
      };
    }
  };

  return (
    <Dropdown
      width="240px"
      opacity="0.5"
      icon={<PhotoCameraIcon fontSize="large" />}
      position={() => {
        return css`
          top: 54px;
          right: 0;
        `;
      }}
      addstyle={() => {
        return css`
          overflow: hidden;
        `;
      }}
    >
      <PostHeader
        addstyle={() => {
          return css`
            ${borderBox('3px', '15px 20px 10px')};
            margin-bottom: 0;
          `;
        }}
      >
        {nickname}

        <Button
          disabled={!preview}
          fontSize="14px"
          color="accent"
          padding="8px 0"
          clickEvent={updateProfile}
        >
          프로필 편집
        </Button>
      </PostHeader>

      <Grid
        width="100%"
        bgColor="secondaryAccent"
        opacity="0.3"
        radius="0"
        padding="15px"
        addstyle={() => {
          return css`
            ${flexBox()};
          `;
        }}
      >
        <Grid
          width="100%"
          height="210px"
          radius="50%"
          overflow="hidden"
          addstyle={() => {
            return css`
              position: relative;
              ${flexBox()};
              background-image: ${preview ? preview : profile};
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
            `;
          }}
        >
          <LabelStyle htmlFor="input--file"></LabelStyle>

          <Input
            id="input--file"
            type="file"
            accept="image/png, image/jpeg"
            changeEvent={selectFile}
            addstyle={() => {
              return css`
                display: none;
              `;
            }}
          />
        </Grid>
      </Grid>
    </Dropdown>
  );
};

export default Profile;
