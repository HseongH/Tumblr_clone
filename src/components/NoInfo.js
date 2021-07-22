import React from "react";
import { css } from "styled-components";

import { Grid } from "../elements";

import SpeakerNotesOffIcon from "@material-ui/icons/SpeakerNotesOff";

const NoInfo = (props) => {
  return (
    <React.Fragment>
      <Grid
        width="100%"
        heigh="100%"
        addstyle={() => {
          return css`
            background-color: rgba(255, 255, 255, 0.15);
            border-radius: 10px;
          `;
        }}
      >
        <SpeakerNotesOffIcon
          style={{
            fontSize: "100px",
            color: "gray",
            textAlign: "center",
            margin: "5% auto",
            display: "block",
            height:"400px"
          }}
        />
      </Grid>
    </React.Fragment>
  );
};

export default NoInfo;
