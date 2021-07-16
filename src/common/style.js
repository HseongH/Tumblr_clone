import { css } from 'styled-components';

export const flexBox = (sortHoz = 'center', sortVer = 'center') => {
  return css`
    display: flex;
    justify-content: ${sortVer};
    align-items: ${sortHoz};
  `;
};

export const flexHoz = (sort = 'center') => {
  return css`
    display: flex;
    justify-content: ${sort};
  `;
};

export const flexVer = (sort = 'center') => {
  return css`
    display: flex;
    align-items: ${sort};
  `;
};

export const borderBox = (radius = '3px', padding = 0) => {
  return css`
    box-sizing: border-box;
    padding: ${padding};
    border-radius: ${radius};
  `;
};

const theme = {
  palette: {
    black: '0, 0, 0',
    white: '255, 255, 255',
    whiteOnDark: '255, 255, 255',
    navy: '0, 25, 53',
    red: '255, 73, 47',
    orange: '255, 138, 0',
    yellow: '232, 215, 56',
    green: '0, 207, 53',
    blue: ' 0, 184, 255',
    purple: '124, 92, 255',
    pink: '255, 98, 206',
    accent: '0, 184, 255',
    secondaryAccent: '229, 231, 234',
    follow: '243, 248, 251',
  },

  size: {
    postWidth: '540px',
  },
};

export default theme;
