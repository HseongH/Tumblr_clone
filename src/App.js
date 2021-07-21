// LIBRARY
import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useDispatch } from 'react-redux';

// REDUX
import { userActions } from './redux/modules/user';

// HISTORY
import { history } from './redux/configstore';

// FUNCTION
import { getCookie } from './common/cookie';

// STYLE
import theme from './common/style';

// PAGES
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Likes from './pages/Likes';
import Following from './pages/Following';
import Followers from './pages/Followers';

// COMPONENTS
import Header from './components/Header';

// ELEMENTS
import Container from './elements/Container';

function App() {
  const dispatch = useDispatch();
  const path = useLocation().pathname;

  useEffect(() => {
    const token = getCookie();

    if (token) dispatch(userActions.authUserDB());
    if (!token && !(path === '/login' || path === '/signup')) history.replace('/login');
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mypage" exact component={MyPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/likes" exact component={Likes} />
          <Route path="/following" exact component={Following} />
          <Route path="/followers" exact component={Followers} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default App;
