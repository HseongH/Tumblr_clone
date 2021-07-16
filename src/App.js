// LIBRARY
import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// STYLE
import theme from './common/style';
import Button from './elements/Button';

// ELEMENTS
import Container from './elements/Container';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Button>안녕하세요</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
