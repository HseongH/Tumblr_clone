// LIBRARY
import React from 'react';

// COMPONENTS
import InputBox from '../components/InputBox';
import Post from '../components/Post';

const Home = (props) => {
  return (
    <>
      <InputBox />
      <Post />
    </>
  );
};

Home.propTypes = {};

export default Home;
