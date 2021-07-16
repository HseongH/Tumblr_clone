// LIBRARY
import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// STYLE
import theme from './common/style';
import Post from './components/Post';

// ELEMENTS
import Container from './elements/Container';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Post></Post>
      </Container>
    </ThemeProvider>
  );
}

export default App;
