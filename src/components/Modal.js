// LIBRARY
import React, { useEffect } from 'react';
import { css } from 'styled-components';

// STYLE
import { flexBox, flexVer } from '../common/style';

// ELEMETS
import { Grid, Button, FixedBox } from '../elements/index';

const Modal = ({ children, cancle, submit, modalClose, submitEvent, ...props }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <FixedBox>
      <Grid
        width="100%"
        height="100%"
        addstyle={() => {
          return css`
            display: flex;
            overflow: auto;
          `;
        }}
      >
        <Grid
          addstyle={() => {
            return css`
              position: relative;
              ${flexVer('flex-start')};
              margin: auto;
            `;
          }}
        >
          <Grid
            width="100%"
            bgColor={props.bgColor}
            padding={props.padding}
            margin="50px 0"
            addstyle={() => {
              return css`
                position: relative;
                ${flexVer('flex-start')};
                flex-direction: column;
              `;
            }}
          >
            {children}
            <Grid
              width="100%"
              padding="15px 20px 0"
              addstyle={() => {
                return css`
                  ${flexBox('space-between')};
                `;
              }}
            >
              <Button
                color={props.color}
                fontSize={props.fontSize}
                bgColor="gray"
                padding="5px 7px"
                clickEvent={modalClose}
              >
                {cancle}
              </Button>

              <Button
                color={props.color}
                fontSize={props.fontSize}
                bgColor="accent"
                padding="5px 7px"
                clickEvent={submitEvent}
              >
                {submit}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FixedBox>
  );
};

Modal.defaultProps = {};

export default Modal;
