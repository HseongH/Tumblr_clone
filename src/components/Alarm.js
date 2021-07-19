// LIBRARY
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { css } from 'styled-components';

// REDUX
import { alarmActions } from '../redux/modules/alarm';

// ELEMENTS
import { Grid, Button, Text } from '../elements/index';

// COMPONENTS
import Dropdown from './Dropdown';
import PostHeader from './PostHeader';
import Reaction from './Reaction';

// STYLE
import { borderBox } from '../common/style';

// ICON
import { FaBolt } from 'react-icons/fa';

const typeText = ['전체', '팔로우', '리블로그', '좋아요'];

const comment = [
  '팔로우, 리블로그, 좋아요를 보려면 포스팅할 때 이 탭을 확인하세요.',
  '포스팅할 때 팔로우를 보려면 이 탭을 확인하세요.',
  '포스팅할 때 리블로그를 보려면 이 탭을 확인하세요.',
  '포스팅할 때 좋아요를 보려면 이 탭을 확인하세요.',
];

const Selected = () => {
  return css`
    ${({ theme }) => {
      const selectedColor = theme.palette.accent;

      return css`
        color: rgb(${selectedColor});
        border-bottom: solid rgb(${selectedColor});
      `;
    }}
  `;
};

const Alarm = (props) => {
  const dispatch = useDispatch();
  const alarmList = useSelector((state) => state.alarm.list);

  const [type, setType] = useState(0);

  useEffect(() => {
    dispatch(alarmActions.getAlarmDB(type));

    return () => {
      alarmActions.getAlarm([], 0);
      setType(0);
    };
  }, [type]);

  return (
    <Dropdown
      width="380px"
      icon={<FaBolt fontSize="30px" />}
      opacity="0.5"
      position={() => {
        return css`
          top: 54px;
          right: 0;
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
        hh4518
      </PostHeader>

      <Grid
        width="100%"
        addstyle={() => {
          return css`
            ${({ theme }) => {
              const borderColor = theme.palette.secondaryAccent;

              return css`
                border-top: 1px solid rgb(${borderColor});
                border-bottom: 1px solid rgb(${borderColor});
              `;
            }};

            & > button {
              width: 25%;
              border-radius: 0;
              padding: 10px 0;
            }
          `;
        }}
      >
        {typeText.map((text, idx) => {
          return (
            <Button
              color="black"
              addstyle={type === idx ? Selected : () => {}}
              clickEvent={() => {
                setType(idx);
              }}
              key={idx}
            >
              {text}
            </Button>
          );
        })}
      </Grid>

      <Grid
        width="100%"
        bgColor="secondaryAccent"
        padding="15px 20px"
        addstyle={() => {
          return css`
            text-align: center;
          `;
        }}
      >
        <FaBolt />

        {alarmList.length ? (
          alarmList.map((alarm) => {
            return <Reaction />;
          })
        ) : (
          <Text fontSize="14px" lineHeight="1.5" margin="8px 0 0">
            {comment[type]}
          </Text>
        )}
      </Grid>
    </Dropdown>
  );
};

Alarm.propTypes = {};

export default Alarm;
