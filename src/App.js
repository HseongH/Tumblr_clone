// LIBRARY
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// STYLE
import theme from './common/style';

// PAGES
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

// COMPONENTS
import Header from './components/Header';

// ELEMENTS
import Container from './elements/Container';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/mypage" exact component={MyPage} /> */}
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default App;
